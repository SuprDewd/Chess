using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows;
using System.IO;
using System.Reflection;

namespace ChessLib
{
    /// <summary>
    /// A Chess board control.
    /// </summary>
    public class ChessBoardControl : Grid, IChessItem
    {
        private ChessBoard _Board = null;
        private Brush _DarkBrush = new SolidColorBrush(Color.FromRgb(0xD1, 0x8B, 0x47));
        private Brush _LightBrush = new SolidColorBrush(Color.FromRgb(0xFF, 0xCE, 0x9E));
        private Brush _SelectBrushDark = Brushes.IndianRed;
        private Brush _SelectBrushLight = Brushes.IndianRed;

        private Func<ChessBoardControl, Move, bool> _Moved = (c, m) => true;
        /// <summary>
        /// A function that is executed every time a Chess piece is moved.
        /// The move will only be executed if the function returns true.
        /// </summary>
        public Func<ChessBoardControl, Move, bool> Moved
        {
            get { return this._Moved; }
            set { this._Moved = value; }
        }

        /// <summary>
        /// The Chess board the control is representing.
        /// </summary>
        public ChessBoard Board { get { return this._Board; } set { this._Board = value; this.Initialize(); } }
        /// <summary>
        /// The brush to use for dark squares.
        /// </summary>
        public Brush DarkBrush { get { return this._DarkBrush; } set { this._DarkBrush = value; this.UpdateColors(); } }
        /// <summary>
        /// The brush to use for light squares.
        /// </summary>
        public Brush LightBrush { get { return this._LightBrush; } set { this._LightBrush = value; this.UpdateColors(); } }
        /// <summary>
        /// The brush to use when a dark square is selected.
        /// </summary>
        public Brush SelectBrushDark { get { return this._SelectBrushDark; } set { this._SelectBrushDark = value; } }
        /// <summary>
        /// The brush to use when a light square is selected.
        /// </summary>
        public Brush SelectBrushLight { get { return this._SelectBrushLight; } set { this._SelectBrushLight = value; } }
        /// <summary>
        /// Whether to display numbers on the squares.
        /// </summary>
        public bool SquareNumbers { get; set; }

        private string _ImageDirectory;
        /// <summary>
        /// The location if the chess icons.
        /// </summary>
        /// <remarks>The icons should be named WKing.png, BKing.png, WQueen.png and so on.</remarks>
        public string ImageDirectory
        {
            get { return _ImageDirectory; }
            set { _ImageDirectory = value; this.Repaint(); }
        }

        private ChessColor _Player = ChessColor.White;
        /// <summary>
        /// Which player is playing.
        /// </summary>
        public ChessColor Player { get { return this._Player; } set { this._Player = value; this.TurnTable(); } }

        /// <summary>
        /// An event that is fired what the game ends.
        /// </summary>
        public event Action<ChessBoard, ChessWinner> GameEnded;

        /// <summary>
        /// An empty constructor.
        /// </summary>
        public ChessBoardControl() { this.TurnTable(); }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The Chess board the control is representing.</param>
        /// <param name="player">The color of the player.</param>
        /// <param name="imageDirectory">The location of the images.</param>
        public ChessBoardControl(ChessBoard board, ChessColor player, string imageDirectory)
        {
            this.ImageDirectory = imageDirectory;
            this.Board = board;
            this.Player = player;
        }
        
        private void TurnTable()
        {
            if (this.Player == ChessColor.Black)
            {
                this.LayoutTransform = new RotateTransform(180);

                if (this.Squares == null) return;

                for (int rank = 0; rank < 8; rank++)
                {
                    for (int file = 0; file < 8; file++)
                    {
                        if (this.Squares[rank, file] == null) continue;
                        this.Squares[rank, file].TurnPiece();
                    }
                }
            }
            else
            {
                this.LayoutTransform = null;
            }
        }

        /// <summary>
        /// The squares on the board.
        /// </summary>
        public ChessSquareControl[,] Squares { get; private set; }

        /// <summary>
        /// Initialize the board.
        /// </summary>
        private void Initialize()
        {
            this.Board.GameEnded += (b, w) =>
                {
                    this.Repaint();
                    this.GameEnded.IfNotNull(a => a(b, w));
                };

            this.Squares = new ChessSquareControl[8, 8];

            for (int rank = 0; rank < 8; rank++)
            {
                int rankR = 7 - rank;

                this.RowDefinitions.Add(new RowDefinition() { Height = new GridLength(1, GridUnitType.Star) });

                Grid g = new Grid();
                Grid.SetRow(g, rankR);

                for (int file = 0; file < 8; file++)
                {
                    g.ColumnDefinitions.Add(new ColumnDefinition() { Width = new GridLength(1, GridUnitType.Star) });

                    ChessSquareControl sq = new ChessSquareControl(this, rank + 1, file + 1);
                    sq.MouseUp += this.SquareClicked;

                    Grid.SetColumn(sq, file);
                    g.Children.Add(sq);
                    this.Squares[rank, file] = sq;
                }

                this.Children.Add(g);
            }

            this.Repaint();
        }

        /// <summary>
        /// Clears the current selected square.
        /// </summary>
        public void ClearSelected()
        {
            this.LastClicked = null;
        }

        private ChessSquareControl LastClicked = null;

        private void SquareClicked(object o, RoutedEventArgs ea)
        {
            ChessSquareControl sq = (ChessSquareControl)o;

            if (this.LastClicked == null)
            {
                if (sq.Square.Piece == null) return;
                if (sq.Square.Piece.Color != this.Board.Turn) return;

                Square[] moves = sq.Square.Piece.TotallyValidMoves.ToArray();

                if (moves.Length == 0) return;

                foreach (Square s in moves)
                {
                    this.Squares[s.Location.Rank - 1, Location.ConvertFile(s.Location.File) - 1].SetBackground(this.SelectBrushDark, this.SelectBrushLight);
                }

                this.LastClicked = sq;
            }
            else if (this.LastClicked == sq)
            {
                this.Repaint();
                this.LastClicked = null;
            }
            else
            {
                Move m = new Move(this.LastClicked.Square.Location, sq.Square.Location);
                if (this.Moved(this, m)) this.LastClicked.Square.To(sq.Square);

                this.Repaint();
                this.LastClicked = null;
            }
        }

        /// <summary>
        /// The size of the Chess board control.
        /// </summary>
        public double Size
        {
            get
            {
                return this.Height;
            }
            set
            {
                this.Height = value;
                this.Width = value;
            }
        }

        /// <summary>
        /// Repaints the board.
        /// </summary>
        public void Repaint()
        {
            if (this.Squares == null) return;

            for (int rank = 0; rank < this.Squares.GetLength(0); rank++)
            {
                for (int file = 0; file < this.Squares.GetLength(1); file++)
                {
                    ChessSquareControl sq = this.Squares[rank, file];
                    if (sq != null)
                    {
                        sq.Update();
                    }
                }
            }

            foreach (ChessPiece p in this.Board.GetKing(this.Board.Turn).CheckingPieces)
            {
                this.Squares[p.Location.Rank - 1, Location.ConvertFile(p.Location.File) - 1].SetBackground(Brushes.Red);
            }
        }

        /// <summary>
        /// Updates the colors of the squares.
        /// </summary>
        private void UpdateColors()
        {
            if (this.Squares == null) return;

            for (int rank = 0; rank < this.Squares.GetLength(0); rank++)
            {
                for (int file = 0; file < this.Squares.GetLength(1); file++)
                {
                    this.Squares[rank, file].UpdateColor();
                }
            }
        }
    }
}
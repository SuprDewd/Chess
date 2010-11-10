using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows;
using System.IO;
using ChessLib.Enums;

namespace ChessLib.Controls
{
    /// <summary>
    /// A Chess square control.
    /// </summary>
    public class ChessSquareControl : StackPanel
    {
        /// <summary>
        /// The square that the control is representing.
        /// </summary>
        public Square Square { get { return this.BoardControl.Board[this.Rank, this.File]; } }
        /// <summary>
        /// The Chess board control the square control belongs to.
        /// </summary>
        public ChessBoardControl BoardControl { get; private set; }

        private int Rank { get; set; }
        private int File { get; set; }

        /// <summary>
        /// The size of the square.
        /// </summary>
        public double Size
        {
            get { return this.Width; }
            set
            {
                this.Width = value;
                this.Height = value;
            }
        }

        /// <summary>
        /// The constructor.
        /// </summary>
        public ChessSquareControl(ChessBoardControl boardControl, int rank, int file)
        {
            this.Rank = rank;
            this.File = file;
            this.BoardControl = boardControl;
            this.HorizontalAlignment = System.Windows.HorizontalAlignment.Stretch;
            this.VerticalAlignment = System.Windows.VerticalAlignment.Stretch;
            this.UpdateColor();
            this.TurnPiece();
        }

        /// <summary>
        /// Updates the background color of the square.
        /// </summary>
        internal void UpdateColor()
        {
            this.Background = this.Square.Color;
        }

        /// <summary>
        /// Turns the piece.
        /// </summary>
        internal void TurnPiece()
        {
            if (this.BoardControl.Player == ChessColor.Black)
            {
                this.LayoutTransform = new RotateTransform(180);
            }
            else
            {
                this.LayoutTransform = null;
            }
        }

        /// <summary>
        /// The background of the Chess square.
        /// </summary>
        public new ChessColor Background
        {
            get
            {
                return this.Square.Color;
            }
            set
            {
                base.Background = value == ChessColor.Black ? this.BoardControl.DarkBrush : this.BoardControl.LightBrush;
            }
        }

        internal void SetBackground(Brush b)
        {
            base.Background = b;
        }

        internal void SetBackground(Brush ifBlack, Brush ifWhite)
        {
            base.Background = this.Square.Color == ChessColor.Black ? ifBlack : ifWhite;
        }

        internal void Update()
        {
            this.Children.Clear();
            this.UpdateColor();

            if (this.BoardControl.SquareNumbers) this.Children.Add(new Label() { Content = this.Square.Location.ToString() });

            if (this.Square.Piece == null) return;

            try
            {
                Image img = new Image
                {
                    Source = this.GetIcon(),
                    Margin = new Thickness(0, this.BoardControl.SquareNumbers ? -25 : 0, 0, 0)
                };

                this.Children.Add(img);
            }
            catch { }
        }

        /// <summary>
        /// Gets the current Chess pieces icon.
        /// </summary>
        /// <returns>The icon.</returns>
        internal BitmapSource GetIcon()
        {
            switch (this.Square.Piece.PieceName)
            {
                case "Bishop": return this.Square.Piece.Color == ChessColor.White ? this.BoardControl.WhiteBishopIcon : this.BoardControl.BlackBishopIcon;
                case "King": return this.Square.Piece.Color == ChessColor.White ? this.BoardControl.WhiteKingIcon : this.BoardControl.BlackKingIcon;
                case "Knight": return this.Square.Piece.Color == ChessColor.White ? this.BoardControl.WhiteKnightIcon : this.BoardControl.BlackKnightIcon;
                case "Pawn": return this.Square.Piece.Color == ChessColor.White ? this.BoardControl.WhitePawnIcon : this.BoardControl.BlackPawnIcon;
                case "Queen": return this.Square.Piece.Color == ChessColor.White ? this.BoardControl.WhiteQueenIcon : this.BoardControl.BlackQueenIcon;
                case "Rook": return this.Square.Piece.Color == ChessColor.White ? this.BoardControl.WhiteRookIcon : this.BoardControl.BlackRookIcon;
                default: return null;
            }
        }
    }
}
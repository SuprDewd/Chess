using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Controls;
using System.Windows.Media;
using ChessLib;
using System.Windows.Media.Imaging;

namespace LanChess
{
    /// <summary>
    /// A Chess square control.
    /// </summary>
    public class ChessSquareControl : StackPanel
    {
        private Brush _DarkBrush = Brushes.Black;
        private Brush _LightBrush = Brushes.White;
        /// <summary>
        /// The brush to use if the current square is dark.
        /// </summary>
        public Brush DarkBrush { get { return this._DarkBrush; } set { this._DarkBrush = value; this.UpdateColor(); } }
        /// <summary>
        /// The brush to use if the current square is light.
        /// </summary>
        public Brush LightBrush { get { return this._LightBrush; } set { this._LightBrush = value; this.UpdateColor(); } }

        /// <summary>
        /// The square that the control is representing.
        /// </summary>
        public Square Square { get; private set; }
        /// <summary>
        /// The Chess board control the square control belongs to.
        /// </summary>
        public ChessBoardControl BoardControl { get; private set; }

        private ChessColor _Player = ChessColor.White;
        /// <summary>
        /// Which player is playing.
        /// </summary>
        public ChessColor Player { get { return this._Player; } set { this._Player = value; this.TurnPiece(); } }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="background">The background of the square.</param>
        public ChessSquareControl(ChessBoardControl boardControl, Square square, Brush darkBrush, Brush lightBrush, ChessColor player)
        {
            this.BoardControl = boardControl;
            this.Square = square;
            this._DarkBrush = darkBrush;
            this._LightBrush = lightBrush;
            this.HorizontalAlignment = System.Windows.HorizontalAlignment.Stretch;
            this.VerticalAlignment = System.Windows.VerticalAlignment.Stretch;
            this.UpdateColor();
            this.Player = player;
        }

        /// <summary>
        /// Updates the background color of the square.
        /// </summary>
        internal void UpdateColor()
        {
            this.Background = this.Square.Color;
        }

        private void TurnPiece()
        {
            if (this.Player == ChessColor.White)
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
                base.Background = value == ChessColor.Black ? this._DarkBrush : this._LightBrush;
            }
        }

        internal void SetBackground(Brush b)
        {
            base.Background = b;
        }

        internal void Update()
        {
            this.Children.Clear();
            this.UpdateColor();

            if (this.Square.Piece == null) return;

            Image img = new Image
            {
                Source = new BitmapImage(new Uri(@"C:\Users\SuprDewd\Desktop\Projects\TSkoli\FOR403\Chess\NIcons\" + this.Square.Piece.PieceNameShort + ".png"))
            };

            this.Children.Add(img);
        }
    }
}
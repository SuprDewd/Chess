using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows;
using System.IO;

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
                    Source = new BitmapImage(new Uri(Path.Combine(this.BoardControl.ImageDirectory, this.Square.Piece.PieceNameShort + ".png"))),
                    Margin = new Thickness(0, this.BoardControl.SquareNumbers ? -25 : 0, 0, 0)
                };

                this.Children.Add(img);
            }
            catch { }
        }
    }
}
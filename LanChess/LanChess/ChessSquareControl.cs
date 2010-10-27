using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Controls;
using System.Windows.Media;
using ChessLib;

namespace LanChess
{
    /// <summary>
    /// A Chess square control.
    /// </summary>
    public class ChessSquareControl : Canvas
    {
        private static Brush _DarkBrush = Brushes.Black;
        private static Brush _LightBrush = Brushes.White;

        /// <summary>
        /// The brush to use if the current square is dark.
        /// </summary>
        public static Brush DarkBrush { get { return _DarkBrush; } set { _DarkBrush = value; } }
        /// <summary>
        /// The brush to use if the current square is light.
        /// </summary>
        public static Brush LightBrush { get { return _LightBrush; } set { _LightBrush = value; } }
        /// <summary>
        /// The square that the control is representing.
        /// </summary>
        public Square Square { get; private set; }
        /// <summary>
        /// The Chess board control the square control belongs to.
        /// </summary>
        public ChessBoardControl BoardControl { get; private set; }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="background">The background of the square.</param>
        public ChessSquareControl(ChessBoardControl boardControl, Square square)
        {
            this.BoardControl = boardControl;
            this.Square = square;
            this.Background = this.Square.Color;
        }

        /// <summary>
        /// The background of the Chess square.
        /// </summary>
        private new ChessColor Background
        {
            get
            {
                return base.Background == ChessSquareControl.DarkBrush ? ChessColor.Black : ChessColor.White;
            }
            set
            {
                base.Background = value == ChessColor.Black ? ChessSquareControl.DarkBrush : ChessSquareControl.LightBrush;
            }
        }

        private void Update()
        {
            this.Children.Clear();

            // Change image and stuff.
        }

        /*

        /// <summary>
        /// The size of the square.
        /// </summary>
        public double Size
        {
            get { return base.Height; }
            set
            {
                base.Height = value;
                base.Width = value;
            }
        }

        /// <summary>
        /// The height of the square.
        /// </summary>
        /// <remarks>This should not be used.</remarks>
        private new double Height
        {
            get { return base.Height; }
            set
            {
                this.Size = value;
            }
        }

        /// <summary>
        /// The width of the square.
        /// </summary>
        /// <remarks>This should not be used.</remarks>
        private new double Width
        {
            get { return base.Width; }
            set
            {
                this.Size = value;
            }
        }
         
         */

    }
}
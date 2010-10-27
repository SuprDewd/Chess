using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Controls;
using System.Windows.Media;
using ChessLib;
using System.Windows;

namespace LanChess
{
    /// <summary>
    /// A Chess board control.
    /// </summary>
    public class ChessBoardControl : Grid, IChessItem
    {
        private ChessBoard _Board = null;

        /// <summary>
        /// The Chess board the control is representing.
        /// </summary>
        public ChessBoard Board { get { return this._Board; } set { this._Board = value; this.Initialize(); } }
        /// <summary>
        /// The location of the Chess piece images.
        /// </summary>
        public Uri ImageDirectory { get; set; }

        /// <summary>
        /// An empty constructor.
        /// </summary>
        public ChessBoardControl() { }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The Chess board the control is representing.</param>
        public ChessBoardControl(ChessBoard board)
        {
            this.Board = board;
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
            this.Squares = new ChessSquareControl[8, 8];

            for (int rank = 0; rank < 8; rank++)
            {
                this.RowDefinitions.Add(new RowDefinition() { Height = new GridLength(1, GridUnitType.Star) });

                Grid g = new Grid();
                Grid.SetRow(g, rank);

                for (int file = 0; file < 8; file++)
                {
                    g.ColumnDefinitions.Add(new ColumnDefinition() { Width = new GridLength(1, GridUnitType.Star) });

                    ChessSquareControl sq = new ChessSquareControl(this, this.Board[rank + 1, file + 1]);

                    Grid.SetColumn(sq, file);
                    g.Children.Add(sq);
                }

                this.Children.Add(g);
            }

            this.Reset();
        }

        /// <summary>
        /// Resets the control.
        /// </summary>
        private void Reset()
        {

        }

        /*

        /// <summary>
        /// The size of the board.
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
        /// The height of the board.
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
        /// The width of the board.
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

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// The King Chess piece.
    /// </summary>
    public class King : ChessPiece
    {
        /// <summary>
        /// The default x-coordinates of the Chess piece.
        /// </summary>
        public override int DefaultX { get { return 4; } }
        /// <summary>
        /// The default y-coordinates of the Chess piece.
        /// </summary>
        public override int DefaultY { get { return base.Color == ChessColor.White ? 0 : 7; } }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The board where the Chess piece is located.</param>
        /// <param name="color">The color of the Chess piece.</param>
        public King(ChessBoard board, ChessColor color) : base(board, color)
        {

        }

        /// <summary>
        /// Move the Chess piece to the specified coordinates.
        /// </summary>
        /// <param name="x">The x-coordinate to move to.</param>
        /// <param name="y">The y-coordinate to move to.</param>
        /// <returns>Whether or not the move was successful.</returns>
        public override bool MoveTo(int x, int y)
        {
            if (x < 0 || y < 0 || x > this.Board.Tiles.GetLength(0) - 1 || y > this.Board.Tiles.GetLength(1)) return false;


        }
    }
}
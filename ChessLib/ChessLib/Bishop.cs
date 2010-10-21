using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// The Bishop Chess piece.
    /// </summary>
    public class Bishop : ChessPiece
    {

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The board where the Chess piece is located.</param>
        /// <param name="color">The color of the Chess piece.</param>
        public Bishop(ChessBoard board, ChessColor color)
            : base(board, color)
        {

        }
    }
}

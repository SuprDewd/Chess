using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// The Rook Chess piece.
    /// </summary>
    public class Rook : ChessPiece
    {
        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The board where the Chess piece is located.</param>
        /// <param name="color">The color of the Chess piece.</param>
        public Rook(ChessBoard board, ChessColor color)
            : base(board, color)
        {

        }
    }
}

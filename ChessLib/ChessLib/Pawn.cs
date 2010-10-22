using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// The Pawn Chess piece.
    /// </summary>
    public class Pawn : ChessPiece
    {
        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The board where the Chess piece is located.</param>
        /// <param name="color">The color of the Chess piece.</param>
        public Pawn(ChessBoard board, ChessColor color)
            : base(board, color)
        {

        }

        /// <summary>
        /// The name of the Chess piece.
        /// </summary>
        public override string PieceName { get { return "Pawn"; } }
    }
}

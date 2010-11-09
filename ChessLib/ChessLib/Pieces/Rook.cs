using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ChessLib.Behaviours;
using ChessLib.Enums;

namespace ChessLib.Pieces
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
        /// <param name="square">The square where the Chess piece is located.</param>
        public Rook(ChessBoard board, ChessColor color, Square square = null)
            : base(board, color, square)
        {
            this.Movement = new RowMovement(this, MovementDirection.Vertical | MovementDirection.Horizontal);
        }

        /// <summary>
        /// The name of the Chess piece.
        /// </summary>
        public override string PieceName { get { return "Rook"; } }
    }
}

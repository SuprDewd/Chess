using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ChessLib.Behaviours;
using ChessLib.Enums;

namespace ChessLib.Pieces
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
        /// <param name="square">The square where the Chess piece is located.</param>
        public Pawn(ChessBoard board, ChessColor color, Square square = null)
            : base(board, color, square)
        {
            this.EnPassantable = false;
            this.Movement = new PawnMovement(this);
        }

        /// <summary>
        /// Whether or not the pawn is en passantable.
        /// </summary>
        public bool EnPassantable { get; protected internal set; }

        /// <summary>
        /// The name of the Chess piece.
        /// </summary>
        public override string PieceName { get { return "Pawn"; } }

        /// <summary>
        /// Resets the Chess piece.
        /// </summary>
        /// <param name="s">The square that the Chess piece belongs to.</param>
        public override void Reset(Square s)
        {
            base.Reset(s);
            this.EnPassantable = false;
        }
    }
}

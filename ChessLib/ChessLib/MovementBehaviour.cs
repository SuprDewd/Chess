using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// An abstract class describing a movement behaviour.
    /// </summary>
    public abstract class MovementBehaviour : BelongsTo<ChessBoard, ChessPiece>
    {
        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="chessPiece">The Chess piece that the movement behaviour belongs to is on.</param>
        public MovementBehaviour(ChessPiece chessPiece)
            : base(chessPiece.Board, chessPiece)
        {

        }

        /// <summary>
        /// Moves the Chess piece.
        /// </summary>
        /// <param name="s">The square to move the Chess piece to.</param>
        /// <returns>Whether the move was successful.</returns>
        public abstract bool Move(Square s);
    }
}
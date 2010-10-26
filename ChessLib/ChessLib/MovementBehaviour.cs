﻿using System;
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
        /// The board that the movement belongs to.
        /// </summary>
        public ChessBoard Board { get { return this.OwnerOne; } }
        /// <summary>
        /// The Chess piece that the movement belongs to.
        /// </summary>
        public ChessPiece Piece { get { return this.OwnerTwo; } }

        /// <summary>
        /// All the moves that the Chess piece is able to move.
        /// </summary>
        public abstract IEnumerable<Square> Moves { get; }
        /// <summary>
        /// All the moves that the Chess piece is able to move, that are also valid.
        /// </summary>
        public abstract IEnumerable<Square> ValidMoves { get; }

        /// <summary>
        /// Moves the Chess piece.
        /// </summary>
        /// <param name="to">The square to move the Chess piece to.</param>
        /// <returns>Whether the move was successful.</returns>
        public virtual bool Move(Square to)
        {
            return this.ValidMoves.Contains(to);
        }
    }
}
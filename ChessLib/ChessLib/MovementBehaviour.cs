using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// An abstract class describing a movement behaviour.
    /// </summary>
    public abstract class MovementBehaviour : IChessItem, IBelongToPiece
    {
        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="chessPiece">The Chess piece that the movement behaviour belongs to is on.</param>
        public MovementBehaviour(ChessPiece chessPiece)
        {
            this.Board = chessPiece.Board;
            this.Piece = chessPiece;
        }

        /// <summary>
        /// The board that the movement belongs to.
        /// </summary>
        public ChessBoard Board { get; private set; }
        /// <summary>
        /// The Chess piece that the movement belongs to.
        /// </summary>
        public ChessPiece Piece { get; private set; }

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

        public virtual IEnumerable<Square> TotallyValidMoves
        {
            get
            {
                if (this.Piece.GetType() == typeof(King)) return this.ValidMoves;
                else return this.ValidMoves.Where(b => this.Board.CanMove(this.Piece.Square, b, true));
            }
        }
    }
}
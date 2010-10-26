using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib.Behaviours
{
    /// <summary>
    /// A movement that is in a row.
    /// </summary>
    public class RowMovement : MovementBehaviour
    {
        /// <summary>
        /// The direction(s) that the Chess piece is able to move into.
        /// </summary>
        public MovementDirection Direction { get; private set; }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="chessPiece">The Chess piece that the movement belongs to.</param>
        /// <param name="direction">The direction(s) that the Chess piece is able move into.</param>
        public RowMovement(ChessPiece chessPiece, MovementDirection direction)
            : base(chessPiece)
        {
            this.Direction = direction;
        }

        /// <summary>
        /// All the moves that the Chess piece is able to move.
        /// </summary>
        public override IEnumerable<Square> Moves
        {
            get
            {
                if ((this.Direction & MovementDirection.Horizontal) == MovementDirection.Horizontal)
                {
                    foreach (var item in this.Piece.Square.SelectRow(0, 1)
                               .UnionAll(this.Piece.Square.SelectRow(0, -1)))
                    {
                        yield return item;
                    }
                }

                if ((this.Direction & MovementDirection.Vertical) == MovementDirection.Vertical)
                {
                    foreach (var item in this.Piece.Square.SelectRow(1, 0)
                               .UnionAll(this.Piece.Square.SelectRow(-1, 0)))
                    {
                        yield return item;
                    }
                }

                if ((this.Direction & MovementDirection.Diagonal) == MovementDirection.Diagonal)
                {
                    foreach (var item in this.Piece.Square.SelectRow( 1,  1)
                               .UnionAll(this.Piece.Square.SelectRow(-1, -1))
                               .UnionAll(this.Piece.Square.SelectRow( 1, -1))
                               .UnionAll(this.Piece.Square.SelectRow(-1,  1)))
                    {
                        yield return item;
                    }
                }
            }
        }

        /// <summary>
        /// All the moves that the Chess piece is able to move, that are also valid.
        /// </summary>
        public override IEnumerable<Square> ValidMoves
        {
            get
            {
                if ((this.Direction & MovementDirection.Horizontal) == MovementDirection.Horizontal)
                {
                    foreach (var item in (this.Piece.Square.SelectRow(0,  1).TakeWhileAndOneMore(s => s.Piece.NotHere())
                                .UnionAll(this.Piece.Square.SelectRow(0, -1).TakeWhileAndOneMore(s => s.Piece.NotHere())))
                                .Where(i => i.Piece == null || i.Piece.Color != this.Piece.Color))
                    {
                        yield return item;
                    }
                }

                if ((this.Direction & MovementDirection.Vertical) == MovementDirection.Vertical)
                {
                    foreach (var item in (this.Piece.Square.SelectRow( 1, 0).TakeWhileAndOneMore(s => s.Piece.NotHere())
                                .UnionAll(this.Piece.Square.SelectRow(-1, 0).TakeWhileAndOneMore(s => s.Piece.NotHere())))
                                .Where(i => i.Piece == null || i.Piece.Color != this.Piece.Color))
                    {
                        yield return item;
                    }
                }

                if ((this.Direction & MovementDirection.Diagonal) == MovementDirection.Diagonal)
                {
                    foreach (var item in (this.Piece.Square.SelectRow( 1,  1).TakeWhileAndOneMore(s => s.Piece.NotHere())
                                .UnionAll(this.Piece.Square.SelectRow(-1, -1).TakeWhileAndOneMore(s => s.Piece.NotHere()))
                                .UnionAll(this.Piece.Square.SelectRow( 1, -1).TakeWhileAndOneMore(s => s.Piece.NotHere()))
                                .UnionAll(this.Piece.Square.SelectRow(-1,  1).TakeWhileAndOneMore(s => s.Piece.NotHere())))
                                .Where(i => i.Piece == null || i.Piece.Color != this.Piece.Color))
                    {
                        yield return item;
                    }
                }
            }
        }
    }
}
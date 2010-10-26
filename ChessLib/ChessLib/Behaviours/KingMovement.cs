using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib.Behaviours
{
    /// <summary>
    /// A movement that is in a row.
    /// </summary>
    public class KingMovement : MovementBehaviour
    {
        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="chessPiece">The Chess piece that the movement belongs to.</param>
        public KingMovement(ChessPiece chessPiece)
            : base(chessPiece)
        {

        }

        /// <summary>
        /// All the moves that the Chess piece is able to move.
        /// </summary>
        public override IEnumerable<Square> Moves
        {
            get
            {
                int rn = this.Piece.Square.Location.Rank - 1,
                    rp = this.Piece.Square.Location.Rank + 1,
                    fn = Location.ConvertFile(this.Piece.Square.Location.File) - 1,
                    fp = Location.ConvertFile(this.Piece.Square.Location.File) + 1;

                if (Location.IsValid(rn, fn)) yield return this.Board[rn, fn];
                if (Location.IsValid(rp, fn)) yield return this.Board[rp, fn];
                if (Location.IsValid(rn, fp)) yield return this.Board[rn, fp];
                if (Location.IsValid(rp, fp)) yield return this.Board[rp, fp];

                if (Location.IsValid(this.Piece.Square.Location.Rank, fn)) yield return this.Board[this.Piece.Square.Location.Rank, fn];
                if (Location.IsValid(this.Piece.Square.Location.Rank, fp)) yield return this.Board[this.Piece.Square.Location.Rank, fp];
                if (Location.IsValid(rn, this.Piece.Square.Location.File)) yield return this.Board[rn, this.Piece.Square.Location.File];
                if (Location.IsValid(rp, this.Piece.Square.Location.File)) yield return this.Board[rp, this.Piece.Square.Location.File];
            }
        }

        /// <summary>
        /// All the moves that the Chess piece is able to move, that are also valid.
        /// </summary>
        public override IEnumerable<Square> ValidMoves
        {
            get
            {
                //this.Hidden = true;

                return (from s in this.Moves.Where(p => p.Piece == null || p.Piece.Color != this.Piece.Color)
                        where !s.IsAttackedBy(this.Piece.Color.Opposite(), p => p.Piece.GetType() != typeof(King))
                        select s); //.Do(() => this.Hidden = false);
            }
        }
    }
}
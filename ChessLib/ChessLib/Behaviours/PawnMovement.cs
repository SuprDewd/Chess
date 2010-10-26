using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib.Behaviours
{
    /// <summary>
    /// A movement that is in a row.
    /// </summary>
    public class PawnMovement : MovementBehaviour
    {
        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="chessPiece">The Chess piece that the movement belongs to.</param>
        public PawnMovement(ChessPiece chessPiece)
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
                int rnxt = this.Piece.Location.Rank + (this.Piece.Color == ChessColor.White ? 1 : -1);
                if (Location.IsValid(rnxt, this.Piece.Location.File))
                {
                    if (this.Board[rnxt, this.Piece.Location.File].Piece == null) yield return this.Board[rnxt, this.Piece.Location.File];

                    int fn = Location.ConvertFile(this.Piece.Location.File) - 1,
                        fp = Location.ConvertFile(this.Piece.Location.File) + 1;

                    if (Location.IsValid(rnxt, fn) && this.Board[rnxt, fn].Piece != null)
                    {
                        yield return this.Board[rnxt, fn];
                    }

                    if (Location.IsValid(rnxt, fp) && this.Board[rnxt, fp].Piece != null)
                    {
                        yield return this.Board[rnxt, fp];
                    }
                }

                if (this.Piece.Color == ChessColor.White && this.Piece.Location.Rank == 2)
                {
                    if (this.Board[3, this.Piece.Location.File].Piece == null && this.Board[4, this.Piece.Location.File].Piece == null) yield return this.Board[4, this.Piece.Location.File];
                }
                else if (this.Piece.Color == ChessColor.Black && this.Piece.Location.Rank == 7)
                {
                    if (this.Board[6, this.Piece.Location.File].Piece == null && this.Board[5, this.Piece.Location.File].Piece == null) yield return this.Board[5, this.Piece.Location.File];
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
                return this.Moves.Where(t => t.Piece == null || t.Piece.Color != this.Piece.Color);
            }
        }
    }
}
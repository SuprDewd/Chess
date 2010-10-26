using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib.Behaviours
{
    /// <summary>
    /// A movement that is in a row.
    /// </summary>
    public class KnightMovement : MovementBehaviour
    {
        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="chessPiece">The Chess piece that the movement belongs to.</param>
        public KnightMovement(ChessPiece chessPiece)
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
                int f = Location.ConvertFile(this.Piece.Location.File),
                    fn2 = f - 2,
                    fn1 = f - 1,
                    fp1 = f + 1,
                    fp2 = f + 2,
                    rn2 = this.Piece.Location.Rank - 2,
                    rn1 = this.Piece.Location.Rank - 1,
                    rp1 = this.Piece.Location.Rank + 1,
                    rp2 = this.Piece.Location.Rank + 2;

                int[][] poss = new int[][]
                {
                    new int[] { rn2, fn1 },
                    new int[] { rn2, fp1 },
                    new int[] { rp2, fn1 },
                    new int[] { rp2, fp1 },

                    new int[] { rn1, fn2 },
                    new int[] { rp1, fn2 },
                    new int[] { rn1, fp2 },
                    new int[] { rp1, fp2 }
                };

                foreach (int[] pos in poss)
                {
                    if (Location.IsValid(pos[0], pos[1]))
                    {
                        yield return this.Board[pos[0], pos[1]];
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
                return this.Moves.Where(t => t.Piece == null || t.Piece.Color != this.Piece.Color);
            }
        }
    }
}
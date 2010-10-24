using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// The Knight Chess piece.
    /// </summary>
    public class Knight : ChessPiece
    {
        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The board where the Chess piece is located.</param>
        /// <param name="color">The color of the Chess piece.</param>
        /// <param name="tile">The tile where the Chess piece is located.</param>
        public Knight(ChessBoard board, ChessColor color, Tile tile = null)
            : base(board, color, tile)
        {

        }

        /// <summary>
        /// All possible moves this Chess piece can move.
        /// </summary>
        /// <remarks>This does not check whether other Chess pieces are in the way.</remarks>
        public override IEnumerable<Tile> AllMoves
        {
            get
            {
                int f = Location.ConvertFile(this.Location.File),
                    fn2 = f - 2,
                    fn1 = f - 1,
                    fp1 = f + 1,
                    fp2 = f + 2,
                    rn2 = this.Location.Rank - 2,
                    rn1 = this.Location.Rank - 1,
                    rp1 = this.Location.Rank + 1,
                    rp2 = this.Location.Rank + 2;

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
        /// All possible moves this Chess piece can move, which are valid.
        /// </summary>
        public override IEnumerable<Tile> AllValidMoves
        {
            get
            {
                return this.AllMoves.Where(t => t.Piece == null || t.Piece.Color != this.Color);
            }
        }

        /// <summary>
        /// The name of the Chess piece.
        /// </summary>
        public override string PieceName { get { return "Knight"; } }
    }
}

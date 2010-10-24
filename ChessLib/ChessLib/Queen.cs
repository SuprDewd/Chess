using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// The Queen Chess piece.
    /// </summary>
    public class Queen : ChessPiece
    {
        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The board where the Chess piece is located.</param>
        /// <param name="color">The color of the Chess piece.</param>
        /// <param name="tile">The tile where the Chess piece is located.</param>
        public Queen(ChessBoard board, ChessColor color, Tile tile = null)
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
                int rp,
                    rn,
                    fp,
                    fn;

                for (int i = 1; i < 8; i++)
                {
                    rp = this.Tile.Location.Rank + i;
                    rn = this.Tile.Location.Rank - i;
                    fp = Location.ConvertFile(this.Tile.Location.File) + i;
                    fn = Location.ConvertFile(this.Tile.Location.File) - i;

                    if (Location.IsValid(rn, fn)) yield return this.Board[rn, fn];
                    if (Location.IsValid(rn, fp)) yield return this.Board[rn, fp];
                    if (Location.IsValid(rp, fn)) yield return this.Board[rp, fn];
                    if (Location.IsValid(rp, fp)) yield return this.Board[rp, fp];
                }

                foreach (Tile tile in this.Board)
                {
                    if (tile != this.Tile && (this.Tile.Location.Rank == tile.Location.Rank || this.Tile.Location.File == tile.Location.File))
                    {
                        yield return tile;
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
        public override string PieceName { get { return "Queen"; } }
    }
}

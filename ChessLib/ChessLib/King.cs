using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// The King Chess piece.
    /// </summary>
    public class King : ChessPiece
    {
        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The board where the Chess piece is located.</param>
        /// <param name="color">The color of the Chess piece.</param>
        /// <param name="tile">The tile where the Chess piece is located.</param>
        public King(ChessBoard board, ChessColor color, Tile tile = null)
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
                int rn = this.Tile.Location.Rank - 1,
                    rp = this.Tile.Location.Rank + 1,
                    fn = Location.ConvertFile(this.Tile.Location.File) - 1,
                    fp = Location.ConvertFile(this.Tile.Location.File) + 1;

                if (Location.IsValid(rn, fn)) yield return this.Board[rn, fn];
                if (Location.IsValid(rp, fn)) yield return this.Board[rp, fn];
                if (Location.IsValid(rn, fp)) yield return this.Board[rn, fp];
                if (Location.IsValid(rp, fp)) yield return this.Board[rp, fp];

                if (Location.IsValid(this.Tile.Location.Rank, fn)) yield return this.Board[this.Tile.Location.Rank, fn];
                if (Location.IsValid(this.Tile.Location.Rank, fp)) yield return this.Board[this.Tile.Location.Rank, fp];
                if (Location.IsValid(rn, this.Tile.Location.File)) yield return this.Board[rn, this.Tile.Location.File];
                if (Location.IsValid(rp, this.Tile.Location.File)) yield return this.Board[rp, this.Tile.Location.File];
            }
        }

        /// <summary>
        /// All possible moves this Chess piece can move, which are valid.
        /// </summary>
        public override IEnumerable<Tile> AllValidMoves
        {
            get
            {
                return this.AllMoves.Where(t => (t.Piece == null || t.Piece.Color != this.Color) && !(from ot in this.Board
                                                                                                      where ot.Piece != null && ot.Piece.Color != this.Color
                                                                                                      select ot.Piece.AllValidMoves).Any(iet => (from i in iet
                                                                                                                                                 where i == t
                                                                                                                                                 select i).Any()));
            }
        }

        /// <summary>
        /// Whether the king is checked or not.
        /// </summary>
        public bool Checked
        {
            get
            {
                return (from ot in this.Board
                        where ot.Piece != null && ot.Piece.Color != this.Color
                        select ot.Piece.AllValidMoves).Any(iet => (from i in iet
                                                                   where i == this.Tile
                                                                   select i).Any());
            }
        }

        /// <summary>
        /// Whether the king is checkmated or not.
        /// </summary>
        public bool CheckMated
        {
            get
            {
                return this.Checked && !this.AllValidMoves.Any();
            }
        }

        /// <summary>
        /// The name of the Chess piece.
        /// </summary>
        public override string PieceName { get { return "King"; } }
    }
}
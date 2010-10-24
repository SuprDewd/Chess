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
                foreach (Tile tile in this.Board)
                {
                    if (tile != this.Tile)
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
        public override string PieceName { get { return "Knight"; } }
    }
}

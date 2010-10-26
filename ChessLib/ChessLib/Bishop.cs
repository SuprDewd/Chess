using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// The Bishop Chess piece.
    /// </summary>
    public class Bishop : ChessPiece
    {
        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The board where the Chess piece is located.</param>
        /// <param name="color">The color of the Chess piece.</param>
        /// <param name="square">The square where the Chess piece is located.</param>
        public Bishop(ChessBoard board, ChessColor color, Square square = null)
            : base(board, color, square)
        {

        }

        /// <summary>
        /// All possible moves this Chess piece can move.
        /// </summary>
        /// <remarks>This does not check whether other Chess pieces are in the way.</remarks>
        public override IEnumerable<Square> AllMoves
        {
            get
            {
                return this.Square.SelectRow(1, 1).UnionAll(this.Square.SelectRow(1, -1).UnionAll(this.Square.SelectRow(-1, 1).UnionAll(this.Square.SelectRow(-1, -1))));
            }
        }

        /// <summary>
        /// All possible moves this Chess piece can move, which are valid.
        /// </summary>
        public override IEnumerable<Square> AllValidMoves
        {
            get
            {
                return this.Square.SelectRow(1, 1).TakeWhileAndOneMore(t => t.Piece == null || t.Piece.Hidden).UnionAll(this.Square.SelectRow(1, -1).TakeWhileAndOneMore(t => t.Piece == null || t.Piece.Hidden).UnionAll(this.Square.SelectRow(-1, 1).TakeWhileAndOneMore(t => t.Piece == null || t.Piece.Hidden).UnionAll(this.Square.SelectRow(-1, -1).TakeWhileAndOneMore(t => t.Piece == null || t.Piece.Hidden)))).Where(t => t.Piece == null || t.Piece.Color != this.Color);
            }
        }

        /// <summary>
        /// The name of the Chess piece.
        /// </summary>
        public override string PieceName { get { return "Bishop"; } }
    }
}

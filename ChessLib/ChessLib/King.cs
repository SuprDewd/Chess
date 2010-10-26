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
        /// <param name="square">The square where the Chess piece is located.</param>
        public King(ChessBoard board, ChessColor color, Square square = null)
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
                int rn = this.Square.Location.Rank - 1,
                    rp = this.Square.Location.Rank + 1,
                    fn = Location.ConvertFile(this.Square.Location.File) - 1,
                    fp = Location.ConvertFile(this.Square.Location.File) + 1;

                if (Location.IsValid(rn, fn)) yield return this.Board[rn, fn];
                if (Location.IsValid(rp, fn)) yield return this.Board[rp, fn];
                if (Location.IsValid(rn, fp)) yield return this.Board[rn, fp];
                if (Location.IsValid(rp, fp)) yield return this.Board[rp, fp];

                if (Location.IsValid(this.Square.Location.Rank, fn)) yield return this.Board[this.Square.Location.Rank, fn];
                if (Location.IsValid(this.Square.Location.Rank, fp)) yield return this.Board[this.Square.Location.Rank, fp];
                if (Location.IsValid(rn, this.Square.Location.File)) yield return this.Board[rn, this.Square.Location.File];
                if (Location.IsValid(rp, this.Square.Location.File)) yield return this.Board[rp, this.Square.Location.File];
            }
        }

        /// <summary>
        /// All possible moves this Chess piece can move, which are valid.
        /// </summary>
        public override IEnumerable<Square> AllValidMoves
        {
            get
            {
                this.Hidden = true;

                return (from s in this.AllMoves.Where(p => p.Piece == null || p.Piece.Color != this.Color)
                        where !s.IsAttackedBy(this.Color.Opposite(), p => p.Piece.GetType() != typeof(King))
                        select s).Do(() => this.Hidden = false);
            }
        }

        /// <summary>
        /// Whether the king is checked or not.
        /// </summary>
        public bool Checked
        {
            get
            {
                return this.Square.IsAttacked;
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
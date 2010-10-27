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

                if (this.Piece.MoveCount == 0)
                {
                    int rank = this.Piece.Color == ChessColor.White ? 1 : 8;

                    if (this.Board[rank, 2].Piece == null && this.Board[rank, 3].Piece == null)
                    {
                        Square s = this.Board[rank, 1];
                        if (s.Piece != null && s.Piece.MoveCount == 0 && !this.Board[rank, 4].IsAttackedBy(this.Piece.Color.Opposite(), sq => sq.Piece.GetType() != typeof(King)))
                        {
                            yield return this.Board[rank, 3];
                        }
                    }
                    else if (this.Board[rank, 6].Piece == null && this.Board[rank, 7].Piece == null)
                    {
                        Square s = this.Board[rank, 8];
                        if (s.Piece != null && s.Piece.MoveCount == 0 && !this.Board[rank, 6].IsAttackedBy(this.Piece.Color.Opposite(), sq => sq.Piece.GetType() != typeof(King)))
                        {
                            yield return this.Board[rank, 7];
                        }
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
                return (from s in this.Moves.Where(p => p.Piece == null || p.Piece.Color != this.Piece.Color)
                        let oppColor = this.Piece.Color.Opposite()
                        where !s.IsAttackedBy(oppColor, p => p.Piece.GetType() != typeof(King)) && !this.SurroundedByKing(s, oppColor)
                        select s);
            }
        }

        /// <summary>
        /// Whether the king with the specified color is surrounding the specified square.
        /// </summary>
        /// <param name="s">The square.</param>
        /// <param name="kingColor">The color of the king.</param>
        /// <returns>Whether the king with the specified color is surrounding the specified square.</returns>
        private bool SurroundedByKing(Square s, ChessColor kingColor)
        {
            Square king = this.Board.GetKing(kingColor);

            int kRank = king.Location.Rank;
            int kFile = Location.ConvertFile(king.Location.File);

            int sRank = s.Location.Rank;
            int sFile = Location.ConvertFile(s.Location.File);

            return (kRank >= sRank - 1 && kRank <= sRank + 1 && kFile <= sFile + 1 && kFile >= sFile - 1);
        }

        /// <summary>
        /// Handles the castling rule.
        /// </summary>
        /// <param name="b">The square to move to.</param>
        /// <returns>Whether or not the move was handled.</returns>
        /// <remarks>Returns false if the situation was not a castling situation.</remarks>
        internal protected bool HandleCastling(Square b)
        {
            Square a = this.Piece.Square;
            int rank = this.Board.Turn == ChessColor.White ? 1 : 8;
            int bFile = Location.ConvertFile(b.Location.File);

            if (!(Location.ConvertFile(a.Location.File) == 5 && (bFile == 3 || bFile == 7))) return false;

            // TODO: Handle castling.

            Square c = this.Board[rank, bFile == 3 ? 1 : 8];
            Square d = this.Board[rank, bFile == 3 ? 4 : 6];

            this.Piece.Square.Piece = null;
            b.Piece = this.Piece;
            this.Piece.MoveCount++;
            this.Piece.Square = b;

            d.Piece = c.Piece;
            c.Piece = null;
            d.Piece.MoveCount++;
            d.Piece.Square = d;

            return true;
        }
    }
}
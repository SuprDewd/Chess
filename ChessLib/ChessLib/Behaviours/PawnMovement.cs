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

                int file = Location.ConvertFile(this.Piece.Location.File);

                if (Location.IsValid(this.Piece.Location.Rank, file - 1))
                {
                    Square lSq = this.Board[this.Piece.Location.Rank, file - 1];

                    if (lSq.Piece != null && lSq.Piece.GetType() == typeof(Pawn) && ((Pawn)lSq.Piece).EnPassantable)
                    {
                        yield return this.Board[rnxt, file - 1];
                    }
                }

                if (Location.IsValid(this.Piece.Location.Rank, file + 1))
                {
                    Square rSq = this.Board[this.Piece.Location.Rank, file + 1];

                    if (rSq.Piece != null && rSq.Piece.GetType() == typeof(Pawn) && ((Pawn)rSq.Piece).EnPassantable)
                    {
                        yield return this.Board[rnxt, file + 1];
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

        public override IEnumerable<Square> TotallyValidMoves
        {
            get
            {
                return this.ValidMoves.Where(b => this.Board.CanMove(this.Piece.Square, b, true, askForPromotion: false));
            }
        }

        /// <summary>
        /// Handles the promotion rule.
        /// </summary>
        /// <param name="b">The square to move to.</param>
        /// <returns>Whether or not the move was handled.</returns>
        /// <param name="askForPromotion">Whether to ask which piece to promote into.</param>
        /// <remarks>Returns false if the situation was not a promotion situation.</remarks>
        public bool HandlePromotion(Square b, bool askForPromotion)
        {
            Square a = this.Piece.Square;

            if (b.Location.Rank == 1 || b.Location.Rank == 8)
            {
                if (b.Piece != null)
                {
                    b.Piece.Capture();
                }

                a.Piece.Square = b;
                b.Piece = a.Piece;
                a.Piece = null;
                b.Piece.MoveCount++;

                PromotionChoise choise = askForPromotion ? this.Board.Promotion(this.Board) : PromotionChoise.Queen;
                ChessPiece cp =
                    choise == PromotionChoise.Bishop ? (ChessPiece)new Bishop(this.Board, b.Piece.Color, b.Piece.Square) :
                    choise == PromotionChoise.Knight ? (ChessPiece)new Knight(this.Board, b.Piece.Color, b.Piece.Square) :
                    choise == PromotionChoise.Rook ? (ChessPiece)new Rook(this.Board, b.Piece.Color, b.Piece.Square) :
                    (ChessPiece)new Queen(this.Board, b.Piece.Color, b.Piece.Square);
                cp.MoveCount = b.Piece.MoveCount;
                b.Piece = cp;

                return true;
            }

            return false;
        }

        /// <summary>
        /// Handles the en passant rule.
        /// </summary>
        /// <param name="b">The square to move to.</param>
        /// <returns>Whether or not the move was handled.</returns>
        /// <remarks>Returns false if the situation was not an en passant situation.</remarks>
        public bool HandleEnPassant(Square b)
        {
            Square a = this.Piece.Square;

            if (!(a.Location.File != b.Location.File && b.Piece == null)) return false;

            Square c = this.Board[a.Location.Rank, b.Location.File];

            c.Piece.Capture();
            c.Piece = null;

            a.Piece.Square = b;
            b.Piece = a.Piece;
            a.Piece = null;
            b.Piece.MoveCount++;

            return true;
        }
    }
}
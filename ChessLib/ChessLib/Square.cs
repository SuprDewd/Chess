using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// A square in the Chess board.
    /// </summary>
    public class Square : IChessItem, IColored, ILocated
    {
        /// <summary>
        /// The color of the square.
        /// </summary>
        public ChessColor Color { get; private set; }
        /// <summary>
        /// The piece positioned on the square.
        /// </summary>
        /// <remarks>This will be null if no piece is positioned on the square.</remarks>
        public ChessPiece Piece { get; internal set; }
        /// <summary>
        /// The location of the square.
        /// </summary>
        public Location Location { get; private set; }
        /// <summary>
        /// The Chess board, that the square belongs to.
        /// </summary>
        public ChessBoard Board { get; private set; }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The board in which the square is located.</param>
        /// <param name="location">The location of the square.</param>
        /// <param name="color">The color of the square.</param>
        /// <param name="piece">The Chess piece that is on the square.</param>
        public Square(ChessBoard board, Location location, ChessColor color, ChessPiece piece = null)
        {
            this.Board = board;
            this.Location = location;
            this.Color = color;
            this.Piece = piece;
        }

        /// <summary>
        /// Moves the piece on the current square to the specified square.
        /// </summary>
        /// <param name="t">The location.</param>
        /// <returns>Whether or not the move was successful.</returns>
        public bool To(Square t)
        {
            if (this.Piece == null) return false;
            if (this.Piece.Color != this.Board.Turn) return false;

            King king = (King)this.Board.GetKing(this.Board.Turn).Piece;

            if (!Object.ReferenceEquals(this, king.Square) && king.Checked) return false;

            if (t.Piece != null && t.Piece.Color == this.Piece.Color) return false;
            if (!this.Piece.Movement.Move(t)) return false;

            // TODO: Implement more logic.

            if (t.Piece != null)
            {
                t.Piece.Capture();
            }

            this.Piece.Square = t;
            t.Piece = this.Piece;
            this.Piece = null;
            t.Piece.MoveCount++;

            this.Board.TurnOver();
            return true;
        }

        /// <summary>
        /// Moves the piece on the current square to the specified location.
        /// </summary>
        /// <param name="l">The location.</param>
        /// <returns>Whether or not the move was successful.</returns>
        public bool To(Location l)
        {
            return this.To(this.Board[l]);
        }

        /// <see cref="Object.ToString()"/>
        public override string ToString()
        {
            return this.Location.ToString();
        }

        /// <summary>
        /// Checks whether the current square is being attacked by the opposite color.
        /// </summary>
        public bool IsAttacked
        {
            get
            {
                if (this.Piece == null) return false;
                else return this.IsAttackedBy(this.Piece.Color.Opposite());
            }
        }

        /// <summary>
        /// Checks whether the current square is being attacked by the specified color.
        /// </summary>
        /// <param name="c">The color of the attacking pieces.</param>
        /// <returns>Whether or not the current square is being attacked.</returns>
        public bool IsAttackedBy(ChessColor c)
        {
            return this.IsAttackedBy(c, t => true);
        }

        /// <summary>
        /// Checks whether the current square is being attacked by the specified color.
        /// </summary>
        /// <param name="c">The color of the attacking pieces.</param>
        /// <param name="predicate">A predicate to filter which squares are checked.</param>
        /// <returns>Whether or not the current square is being attacked.</returns>
        /// <remarks>The predicate is fired, after it's made sure that there is a piece on the square => Square.Piece != null.</remarks>
        public bool IsAttackedBy(ChessColor c, Func<Square, bool> predicate)
        {
            int pawnRank = this.Location.Rank + (c == ChessColor.White ? -1 : 1);
            int rFile = Location.ConvertFile(this.Location.File) + 1;
            int lFile = Location.ConvertFile(this.Location.File) - 1;

            if (Location.IsValid(pawnRank, rFile))
            {
                Square s = this.Board[pawnRank, rFile];

                if (s.Piece != null && predicate(s) && s.Piece.Color == c && s.Piece.GetType() == typeof(Pawn)) return true;
            }

            if (Location.IsValid(pawnRank, lFile))
            {
                Square s = this.Board[pawnRank, lFile];

                if (s.Piece != null && predicate(s) && s.Piece.Color == c && s.Piece.GetType() == typeof(Pawn)) return true;
            }

            return (from s in this.Board
                    where s.Piece != null && predicate(s) && s.Piece.Color == c && s.Piece.GetType() != typeof(Pawn)
                    select s).Any(s => s.Piece.Movement.ValidMoves.Contains(this));
        }

        /// <summary>
        /// Selects a row of squares, spreading out from the current square.
        /// </summary>
        /// <param name="rankAdd">The number to add to the rank on each iteration.</param>
        /// <param name="fileAdd">The number to add to the file on each iteration.</param>
        /// <returns>The row of squares.</returns>
        internal IEnumerable<Square> SelectRow(int rankAdd, int fileAdd)
        {
            Square lastTile = this;

            int rAdded, fAdded;

            while (true)
            {
                rAdded = lastTile.Location.Rank + rankAdd;
                fAdded = Location.ConvertFile(lastTile.Location.File) + fileAdd;

                if (Location.IsValid(rAdded, fAdded))
                {
                    lastTile = this.Board[rAdded, fAdded];
                    yield return lastTile;
                }
                else yield break;
            }
        }
    }
}
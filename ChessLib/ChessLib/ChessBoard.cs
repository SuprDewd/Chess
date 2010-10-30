using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ChessLib.Behaviours;

namespace ChessLib
{
    /// <summary>
    /// The main Chess board.
    /// </summary>
    /// <remarks>This is also the controller of the game.</remarks>
    public class ChessBoard : IEnumerable<Square>
    {
        /// <summary>
        /// All the pieces and their starting locations.
        /// </summary>
        protected readonly Dictionary<Location, ChessPiece> StartingPieces;

        /// <summary>
        /// The squares of the Chess board.
        /// </summary>
        private Square[,] Squares { get; set; }
        /// <summary>
        /// The color that should move next.
        /// </summary>
        public ChessColor Turn { get; private set; }

        /// <summary>
        /// The move history.
        /// </summary>
        public List<Move> History { get; internal protected set; }
        private int _CurrentHistory = 0;
        /// <summary>
        /// The current position in the move history.
        /// </summary>
        public int CurrentHistory { get { return this._CurrentHistory; } set { this._CurrentHistory = value; this.PlayHistoryTo(this._CurrentHistory); } }

        /// <summary>
        /// A function which decides what to promote to when a pawn reaches the end of the Chess board.
        /// </summary>
        protected internal Func<ChessBoard, PromotionChoise> Promotion { get; protected set; }

        /// <summary>
        /// The constructor.
        /// </summary>
        public ChessBoard() : this(c => PromotionChoise.Queen) { }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="promotion">A function which decides what to promote to when a pawn reaches the end of the Chess board.</param>
        public ChessBoard(Func<ChessBoard, PromotionChoise> promotion)
        {
            this.Promotion = promotion;
            this.History = new List<Move>();

            this.StartingPieces = new Dictionary<Location, ChessPiece>
            {
                {new Location(8, 'A'), new Rook(this, ChessColor.Black)},
                {new Location(8, 'B'), new Knight(this, ChessColor.Black)},
                {new Location(8, 'C'), new Bishop(this, ChessColor.Black)},
                {new Location(8, 'D'), new Queen(this, ChessColor.Black)},
                {new Location(8, 'E'), new King(this, ChessColor.Black)},
                {new Location(8, 'F'), new Bishop(this, ChessColor.Black)},
                {new Location(8, 'G'), new Knight(this, ChessColor.Black)},
                {new Location(8, 'H'), new Rook(this, ChessColor.Black)},

                {new Location(7, 'A'), new Pawn(this, ChessColor.Black)},
                {new Location(7, 'B'), new Pawn(this, ChessColor.Black)},
                {new Location(7, 'C'), new Pawn(this, ChessColor.Black)},
                {new Location(7, 'D'), new Pawn(this, ChessColor.Black)},
                {new Location(7, 'E'), new Pawn(this, ChessColor.Black)},
                {new Location(7, 'F'), new Pawn(this, ChessColor.Black)},
                {new Location(7, 'G'), new Pawn(this, ChessColor.Black)},
                {new Location(7, 'H'), new Pawn(this, ChessColor.Black)},

                {new Location(1, 'A'), new Rook(this, ChessColor.White)},
                {new Location(1, 'B'), new Knight(this, ChessColor.White)},
                {new Location(1, 'C'), new Bishop(this, ChessColor.White)},
                {new Location(1, 'D'), new Queen(this, ChessColor.White)},
                {new Location(1, 'E'), new King(this, ChessColor.White)},
                {new Location(1, 'F'), new Bishop(this, ChessColor.White)},
                {new Location(1, 'G'), new Knight(this, ChessColor.White)},
                {new Location(1, 'H'), new Rook(this, ChessColor.White)},

                {new Location(2, 'A'), new Pawn(this, ChessColor.White)},
                {new Location(2, 'B'), new Pawn(this, ChessColor.White)},
                {new Location(2, 'C'), new Pawn(this, ChessColor.White)},
                {new Location(2, 'D'), new Pawn(this, ChessColor.White)},
                {new Location(2, 'E'), new Pawn(this, ChessColor.White)},
                {new Location(2, 'F'), new Pawn(this, ChessColor.White)},
                {new Location(2, 'G'), new Pawn(this, ChessColor.White)},
                {new Location(2, 'H'), new Pawn(this, ChessColor.White)},
            };

            this.Reset();
        }

        /// <summary>
        /// Resets the Chess board.
        /// </summary>
        public void Reset()
        {
            this.Turn = ChessColor.White;
            this.Squares = new Square[8, 8];

            for (int row = 0; row < this.Squares.GetLength(0); row++)
            {
                for (int column = 0; column < this.Squares.GetLength(1); column++)
                {
                    Location curLoc = new Location(row + 1, column + 1);
                    ChessPiece piece = (from p in this.StartingPieces where p.Key == curLoc select p.Value).SingleOrDefault();

                    Square t = (this.Squares[row, column] == null ? new Square(this, curLoc, (row + column) % 2 == 0 ? ChessColor.Black : ChessColor.White) : this.Squares[row, column]);
                    t.Piece = piece;

                    if (piece != null) piece.Reset(t);

                    this.Squares[row, column] = t;
                }
            }

            this.NextTurn.IfNotNull(a => a(this));
        }

        /// <summary>
        /// Plays the history from the beginning, the specified amount of moves.
        /// </summary>
        /// <param name="to">How many moves to play from the beginning.</param>
        public void PlayHistoryTo(int to)
        {
            this.Reset();
            this._CurrentHistory = 0;

            for (int i = 0; i < Math.Max(Math.Min(to, this.History.Count), 0); i++)
            {
                Move m = this.History[i];

                this.Move(this[m.A], this[m.B], false);
                this._CurrentHistory = i + 1;
            }
        }

        /// <summary>
        /// Gets the king with the specified color.
        /// </summary>
        /// <param name="c">The color of the king to find.</param>
        /// <returns>The square that the king is on.</returns>
        public Square GetKing(ChessColor c)
        {
            return (from s in this
                    where s.Piece != null && s.Piece.Color == c && s.Piece.GetType() == typeof(King)
                    select s).Single();
        }

        /// <summary>
        /// Tell the Chess board that the current turn is over.
        /// </summary>
        internal protected void TurnOver()
        {
            this.Turn = this.Turn.Opposite();

            bool blackCheckmate = ((King)this.GetKing(ChessColor.Black).Piece).CheckMated;
            bool whiteCheckmate = ((King)this.GetKing(ChessColor.White).Piece).CheckMated;

            if ((from s in this where s.Piece != null select s).Count() == 2 || (blackCheckmate && whiteCheckmate))
            {
                this.StaleMate.IfNotNull(a => a(this));
            }
            else if (blackCheckmate || whiteCheckmate)
            {
                this.CheckMate.IfNotNull(a => a(this, blackCheckmate ? ChessColor.Black : ChessColor.White));
            }
            else
            {
                this.NextTurn.IfNotNull(a => a(this));
            }
        }

        /// <summary>
        /// Moves a Chess piece from A to B.
        /// </summary>
        /// <param name="a">Square A.</param>
        /// <param name="b">Square B.</param>
        /// <returns>Whether or not the move was successful.</returns>
        internal protected bool Move(Square a, Square b)
        {
            return this.Move(a, b, true);
        }

        /// <summary>
        /// Moves a Chess piece from A to B.
        /// </summary>
        /// <param name="a">Square A.</param>
        /// <param name="b">Square B.</param>
        /// <param name="writeHistory">Whether or not to write the move to the history.</param>
        /// <returns>Whether or not the move was successful.</returns>
        protected bool Move(Square a, Square b, bool writeHistory)
        {
            if (a.Piece == null) return false;
            if (a.Piece.Color != this.Turn) return false;

            King king = (King)this.GetKing(this.Turn).Piece;
            if (!Object.ReferenceEquals(a, king.Square) && king.Checked) return false;

            if (b.Piece != null && b.Piece.Color == a.Piece.Color) return false;
            if (!a.Piece.Movement.Move(b)) return false;

            bool pawn = a.Piece.GetType() == typeof(Pawn);

            if (!(pawn && (((PawnMovement)a.Piece.Movement).HandlePromotion(b) || ((PawnMovement)a.Piece.Movement).HandleEnPassant(b))) && !(a.Piece.GetType() == typeof(King) && ((KingMovement)a.Piece.Movement).HandleCastling(b)))
            {
                if (b.Piece != null)
                {
                    b.Piece.Capture();
                }

                a.Piece.Square = b;
                b.Piece = a.Piece;
                a.Piece = null;
                b.Piece.MoveCount++;
            }

            foreach (Pawn p in from sq in this where sq.Piece != null && sq.Piece.Color == this.Turn && sq.Piece.GetType() == typeof(Pawn) select (Pawn)sq.Piece)
            {
                p.EnPassantable = false;
            }

            if (pawn && Math.Abs(b.Location.Rank - a.Location.Rank) == 2)
            {
                ((Pawn)b.Piece).EnPassantable = true;
            }

            if (writeHistory) this.WriteHistory(a.Location, b.Location);

            this.TurnOver();
            return true;
        }

        /// <summary>
        /// Writes a new move to the history.
        /// </summary>
        /// <param name="a">From.</param>
        /// <param name="b">To.</param>
        protected void WriteHistory(Location a, Location b)
        {
            for (int i = this.History.Count - 1; i >= this.CurrentHistory; i--)
            {
                this.History.RemoveAt(i);
            }

            this.History.Add(new Move(a, b));
            this._CurrentHistory++;
        }

        #region Events

        /// <summary>
        /// An event that is fired when the next player should move.
        /// </summary>
        public event Action<ChessBoard> NextTurn;
        /// <summary>
        /// An event that is fired when there is a checkmate.
        /// </summary>
        public event Action<ChessBoard, ChessColor> CheckMate;
        /// <summary>
        /// An event that is fired when there is a stalemate.
        /// </summary>
        public event Action<ChessBoard> StaleMate;

        #endregion

        #region Indexers

        /// <summary>
        /// Gives access to the squares of the Chess board.
        /// </summary>
        /// <param name="rank">The rank of the square.</param>
        /// <param name="file">The file of the square.</param>
        /// <returns>The square at the specified rank and file.</returns>
        public Square this[int rank, char file]
        {
            get
            {
                return this.Squares[rank - 1, Location.ConvertFile(file) - 1];
            }
        }

        /// <summary>
        /// Gives access to the squares of the Chess board.
        /// </summary>
        /// <param name="rank">The rank of the square.</param>
        /// <param name="file">The file of the square.</param>
        /// <returns>The square at the specified rank and file.</returns>
        public Square this[int rank, int file]
        {
            get
            {
                return this.Squares[rank - 1, file - 1];
            }
        }

        /// <summary>
        /// Gives access to the squares of the Chess board.
        /// </summary>
        /// <param name="l">The location of the square.</param>
        /// <returns>The square at the specified rank and file.</returns>
        public Square this[Location l]
        {
            get
            {
                return this[l.Rank, l.File];
            }
        }

        /// <summary>
        /// Gives access to the squares of the Chess board.
        /// </summary>
        /// <param name="l">The location of the square.</param>
        /// <returns>The square at the specified rank and file.</returns>
        /// <example>A1, D2, H8 ...</example>
        public Square this[string l]
        {
            get
            {
                return this[Convert.ToInt32(l[1].ToString()), l[0]];
            }
        }

        #endregion

        #region Enumerators

        /// <see cref="IEnumerable&lt;T&gt;.GetEnumerator()"/>
        public IEnumerator<Square> GetEnumerator()
        {
            for (int rank = 1; rank <= this.Squares.GetLength(0); rank++)
            {
                for (int file = 1; file <= this.Squares.GetLength(1); file++)
                {
                    yield return this[rank, file];
                }
            }
        }

        /// <see cref="System.Collections.IEnumerable.GetEnumerator()"/>
        System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
        {
            for (int rank = 1; rank <= this.Squares.GetLength(0); rank++)
            {
                for (int file = 1; file <= this.Squares.GetLength(1); file++)
                {
                    yield return this[rank, file];
                }
            }
        }

        #endregion
    }
}
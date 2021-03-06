﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ChessLib.Behaviours;
using ChessLib.Pieces;
using ChessLib.Enums;

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
        public ChessColor Turn { get; protected set; }
        /// <summary>
        /// Whether the game is over.
        /// </summary>
        public bool GameOver { get; protected set; }

        /// <summary>
        /// Whether to fire events.
        /// </summary>
        protected internal bool FireEvents { get; protected set; }

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
        public Func<ChessBoard, PromotionChoise> Promotion { get; set; }

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
            this.FireEvents = true;
            this.GameOver = false;
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

            this.Reset(true);
        }

        /// <summary>
        /// Resets the Chess board.
        /// </summary>
        public void Reset(bool clearHistory = false)
        {
            this.GameOver = false;
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

            if (clearHistory) { this.History.Clear(); this._CurrentHistory = 0; }
            if (this.FireEvents) this.NextTurn.IfNotNull(a => a(this));
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

                this.FireEvents = false;
                this.Move(this[m.A], this[m.B], false, false);
                this.FireEvents = true;
                this._CurrentHistory = i + 1;
            }
        }

        /// <summary>
        /// Gets the king with the specified color.
        /// </summary>
        /// <param name="c">The color of the king to find.</param>
        /// <returns>The square that the king is on.</returns>
        public King GetKing(ChessColor c)
        {
            return (from s in this
                    where s.Piece != null && s.Piece.Color == c && s.Piece.GetType() == typeof(King)
                    select (King)s.Piece).Single();
        }

        /// <summary>
        /// Tell the Chess board that the current turn is over.
        /// </summary>
        internal protected void TurnOver(bool checkGameOver = true)
        {
            this.Turn = this.Turn.Opposite();

            if (checkGameOver)
            {
                King blackKing = this.GetKing(ChessColor.Black);
                King whiteKing = this.GetKing(ChessColor.White);

                if (this.StaleMate)
                {
                    this.GameOver = true;
                    if (this.FireEvents) this.GameEnded.IfNotNull(a => a(this, ChessWinner.StaleMate));
                }
                else if (blackKing.CheckMade)
                {
                    this.GameOver = true;
                    if (this.FireEvents) this.GameEnded.IfNotNull(a => a(this, ChessWinner.White));
                }
                else if (whiteKing.CheckMade)
                {
                    this.GameOver = true;
                    if (this.FireEvents) this.GameEnded.IfNotNull(a => a(this, ChessWinner.Black));
                }
                else
                {
                    if (this.FireEvents) this.NextTurn.IfNotNull(a => a(this));
                }
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
        /// <param name="validate">Wether to validate the move.</param>
        /// <returns>Whether or not the move was successful.</returns>
        protected bool Move(Square a, Square b, bool writeHistory = true, bool validate = true)
        {
            if (!this.CanMove(a, b, false, validate)) return false;

            foreach (Pawn p in from sq in this where sq.Piece != null && sq.Piece.Color == this.Turn && sq.Piece.GetType() == typeof(Pawn) select (Pawn)sq.Piece)
            {
                p.EnPassantable = false;
            }

            if (b.Piece.GetType() == typeof(Pawn) && Math.Abs(b.Location.Rank - a.Location.Rank) == 2)
            {
                ((Pawn)b.Piece).EnPassantable = true;
            }

            if (writeHistory) this.WriteHistory(a.Location, b.Location);

            this.TurnOver(validate);
            return true;
        }

        /// <summary>
        /// Checks whether the the piece on a can be moved to b.
        /// </summary>
        /// <param name="a">Square a.</param>
        /// <param name="b">Square b.</param>
        /// <param name="resetAlways">Whether to reset the board when the check is done.</param>
        /// <param name="validate">Whether to validate.</param>
        /// <param name="askForPromotion">Whether to ask for promotion.</param>
        /// <returns>Whether the piece on a can be move to b.</returns>
        protected internal bool CanMove(Square a, Square b, bool resetAlways = false, bool validate = true, bool askForPromotion = true)
        {
            if (this.GameOver) return false;
            if (a.Piece == null) return false;
            if (a.Piece.Color != this.Turn) return false;
            if (b.Piece != null && b.Piece.Color == a.Piece.Color) return false;
            if (validate && !a.Piece.Movement.Move(b)) return false;

            King king = null;

            if (validate)
            {
                king = this.GetKing(this.Turn);
                if (!Object.ReferenceEquals(a, king.Square) && king.Checked)
                {
                    // Check if move will block check, and that king will not be checked afterwards.

                    IEnumerable<ChessPiece> threats = king.CheckingPieces;

                    if (threats.Count() == 1)
                    {
                        ChessPiece single = threats.Single();

                        if (single.Square != b)
                        {
                            if (single.Movement.GetType() != typeof(RowMovement)) return false;

                            RowMovement rm = (RowMovement)single.Movement;

                            if (rm.AllValidMoves(b).Contains(king.Square)) return false;
                        }
                    }
                    else
                    {
                        // Multiple threats.

                        if (a.Piece != king) return false;
                    }
                }
            }

            TempPiece[,] backupBoard = null;

            if (validate)
            {
                backupBoard = new TempPiece[8, 8];

                foreach (Square s in this)
                {
                    backupBoard[s.Location.Rank - 1, Location.ConvertFile(s.Location.File) - 1] = new TempPiece(s.Piece);
                }
            }

            if (!(a.Piece.GetType() == typeof(Pawn) && (((PawnMovement)a.Piece.Movement).HandlePromotion(b, askForPromotion) || ((PawnMovement)a.Piece.Movement).HandleEnPassant(b))) &&
            !(a.Piece.GetType() == typeof(King) && ((KingMovement)a.Piece.Movement).HandleCastling(b)))
            {
                a.Piece.Square = b;
                b.Piece = a.Piece;
                a.Piece = null;
                b.Piece.MoveCount++;
            }

            if (validate)
            {
                bool kingChecked = king.Checked;

                if (resetAlways || kingChecked)
                {
                    for (int x = 0; x < 8; x++)
                    {
                        for (int y = 0; y < 8; y++)
                        {
                            TempPiece tp = backupBoard[x, y];
                            Square s = this.Squares[x, y];

                            s.Piece = tp.Piece;

                            if (tp.Piece != null)
                            {
                                tp.Piece.Square = s;
                                tp.Piece.MoveCount = tp.MoveCount;
                            }
                        }
                    }
                }

                return !kingChecked;
            }
            else return true;
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

        /// <summary>
        /// Whether a stalemate has occured.
        /// </summary>
        public bool StaleMate
        {
            get
            {
                if (this.Count(s => s.Piece != null) == 2) return true;

                King king = this.GetKing(this.Turn);
                if (king.Checked) return false;

                foreach (Square square in this.Where(s => s.Piece != null && s.Piece.Color == king.Color))
                {
                    if (square.Piece.TotallyValidMoves.Count() != 0) return false;
                }

                return true;
            }
        }

        #region Events

        /// <summary>
        /// An event that is fired when the next player should move.
        /// </summary>
        public event Action<ChessBoard> NextTurn;
        /// <summary>
        /// An event that is fired when the game has ended.
        /// </summary>
        public event Action<ChessBoard, ChessWinner> GameEnded;

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

        #region Import / Export

        /// <summary>
        /// Imports the specified moves.
        /// </summary>
        /// <param name="moves">The moves.</param>
        /// <param name="tryAll">Whether to try importing all the moves.</param>
        /// <returns>Whether all moves could be executed.</returns>
        public bool Import(string moves, bool tryAll = false)
        {
            return this.Import(ChessMoveParser.Parse(moves), tryAll);
        }

        /// <summary>
        /// Imports the specified moves.
        /// </summary>
        /// <param name="moves">The moves.</param>
        /// /// <param name="tryAll">Whether to try importing all the moves.</param>
        /// <returns>Whether all moves could be executed.</returns>
        public bool Import(Move[] moves, bool tryAll = false)
        {
            foreach (Move m in moves)
            {
                if (!this.Move(this[m.A], this[m.B]) && !tryAll) return false;
            }

            return true;
        }

        /// <summary>
        /// Exports the current move history.
        /// </summary>
        /// <returns>The move history.</returns>
        public string Export()
        {
            StringBuilder sb = new StringBuilder();

            for (int i = 0; i < this.CurrentHistory; i++)
            {
                Move m = this.History[i];

                m.A.ToString(sb);
                sb.Append(' ');
                m.B.ToString(sb);

                if (i + 1 < this.CurrentHistory) sb.Append('\n');
            }

            return sb.ToString();
        }

        #endregion
    }
}
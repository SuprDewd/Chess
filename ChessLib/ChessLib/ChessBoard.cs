﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// The main Chess board.
    /// </summary>
    /// <remarks>This is also the controller of the game.</remarks>
    public class ChessBoard : IEnumerable<Square>
    {
        private readonly Dictionary<Location, ChessPiece> StartingPieces;

        /// <summary>
        /// The squares of the Chess board.
        /// </summary>
        private Square[,] Squares { get; set; }
        /// <summary>
        /// The color that should move next.
        /// </summary>
        public ChessColor Turn { get; private set; }

        /// <summary>
        /// The constructor.
        /// </summary>
        public ChessBoard()
        {
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

                    if (t.Piece != null) t.Piece.Square = t;

                    this.Squares[row, column] = t;
                }
            }

            this.NextTurn.IfNotNull(a => a(this));
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
        internal void TurnOver()
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
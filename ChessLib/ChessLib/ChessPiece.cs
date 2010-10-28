using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// A Chess piece.
    /// </summary>
    public abstract class ChessPiece : IChessItem, IColored
    {
        /// <summary>
        /// The color of the Chess piece.
        /// </summary>
        public ChessColor Color { get; internal protected set; }
        /// <summary>
        /// The Chess board on which the Chess piece is located.
        /// </summary>
        public ChessBoard Board { get; internal set; }
        /// <summary>
        /// The square on which the Chess piece is located.
        /// </summary>
        public Square Square { get; internal set; }
        /// <summary>
        /// The location of the square on which the Chess piece is located.
        /// </summary>
        public Location Location { get { return this.Square.Location; } }
        /// <summary>
        /// The movement behaviour of the Chess piece.
        /// </summary>
        protected internal MovementBehaviour Movement { get; set; }

        /// <summary>
        /// How many times the Chess piece has been moved.
        /// </summary>
        public int MoveCount { get; protected internal set; }
        /// <summary>
        /// Whether a Chess piece is hidden or not.
        /// </summary>
        /// <remarks>Used for movement calculcations.</remarks>
        protected internal bool Hidden { get; set; }

        /// <summary>
        /// An event which will be fired when the Chess piece is captured.
        /// </summary>
        public event Action<ChessPiece> Captured;

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The board where the Chess piece is located.</param>
        /// <param name="color">The color of the Chess piece.</param>
        /// <param name="square">The square where the Chess piece is located.</param>
        public ChessPiece(ChessBoard board, ChessColor color, Square square)
        {
            this.Hidden = false;
            this.Board = board;
            this.Color = color;
            this.Square = square;
        }

        /// <summary>
        /// All the moves that the Chess piece is able to move.
        /// </summary>
        public IEnumerable<Square> Moves { get { return this.Movement.Moves; } }
        /// <summary>
        /// All the moves that the Chess piece is able to move, that are also valid.
        /// </summary>
        public IEnumerable<Square> ValidMoves { get { return this.Movement.ValidMoves; } }

        /// <summary>
        /// The name of the Chess piece.
        /// </summary>
        public abstract string PieceName { get; }

        /// <summary>
        /// The name of the Chess piece, prepended with the first character of the color.
        /// </summary>
        public string PieceNameShort
        {
            get
            {
                return this.Color.ToString().Substring(0, 1) + this.PieceName;
            }
        }

        /// <see cref="Object.ToString()"/>
        public override string ToString()
        {
            return this.Color.ToString() + " " + this.PieceName;
        }

        /// <summary>
        /// Capture the Chess piece.
        /// </summary>
        internal void Capture()
        {
            this.Captured.IfNotNull(a => a(this));
        }
    }
}
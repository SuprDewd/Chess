using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// A Chess piece.
    /// </summary>
    public abstract class ChessPiece : BelongsTo<ChessBoard, Tile>, IColored
    {
        /// <summary>
        /// The color of the Chess piece.
        /// </summary>
        public ChessColor Color { get; private set; }
        /// <summary>
        /// The Chess board on which the Chess piece is located.
        /// </summary>
        public ChessBoard Board { get { return this.OwnerOne; } internal set { this.OwnerOne = value; } }
        /// <summary>
        /// The tile on which the Chess piece is located.
        /// </summary>
        public Tile Tile { get { return this.OwnerTwo; } internal set { this.OwnerTwo = value; } }
        /// <summary>
        /// The location of the tile on which the Chess piece is located.
        /// </summary>
        public Location Location { get { return this.Tile.Location; } }

        /// <summary>
        /// An event which will be fired when the Chess piece is captured.
        /// </summary>
        public event Action<ChessPiece> Captured;

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The board where the Chess piece is located.</param>
        /// <param name="color">The color of the Chess piece.</param>
        /// <param name="tile">The tile where the Chess piece is located.</param>
        public ChessPiece(ChessBoard board, ChessColor color, Tile tile)
            : base(board, tile)
        {
            this.Color = color;
        }

        /// <summary>
        /// All the moves that the Chess piece can move.
        /// </summary>
        /// <remarks>This does not check for validity of the moves.</remarks>
        public abstract IEnumerable<Tile> AllMoves { get; }
        /// <summary>
        /// All the moves that the Chess piece can move, that are valid.
        /// </summary>
        public abstract IEnumerable<Tile> AllValidMoves { get; }

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
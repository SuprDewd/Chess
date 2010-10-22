using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// A Chess piece.
    /// </summary>
    public abstract class ChessPiece : ChessItem, IColored
    {
        /// <summary>
        /// The color of the Chess piece.
        /// </summary>
        public ChessColor Color { get; private set; }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The board where the Chess piece is located.</param>
        /// <param name="color">The color of the Chess piece.</param>
        public ChessPiece(ChessBoard board, ChessColor color)
            : base(board)
        {
            this.Color = color;
        }

        /// <summary>
        /// The name of the Chess piece.
        /// </summary>
        public abstract string PieceName { get; }

        /// <see cref="Object.ToString()"/>
        public override string ToString()
        {
            return this.Color.ToString() + " " + this.PieceName;
        }
    }
}
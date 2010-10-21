using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// A Chess piece.
    /// </summary>
    public abstract class ChessPiece : ChessItem
    {
        /// <summary>
        /// The color of the Chess piece.
        /// </summary>
        public ChessColor Color { get; private set; }
        /// <summary>
        /// The default x-coordinates of the Chess piece.
        /// </summary>
        public abstract int DefaultX { get; }
        /// <summary>
        /// The default y-coordinates of the Chess piece.
        /// </summary>
        public abstract int DefaultY { get; }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The board where the Chess piece is located.</param>
        /// <param name="color">The color of the Chess piece.</param>
        public ChessPiece(ChessBoard board, ChessColor color) : base(board)
        {
            this.Color = color;
        }

        /// <summary>
        /// Moves the Chess piece to it's default location.
        /// </summary>
        /// <returns></returns>
        public bool Reset()
        {

        }

        /// <summary>
        /// Move the Chess piece to the specified tile.
        /// </summary>
        /// <param name="t">The tile to move to.</param>
        /// <returns>Whether or not the move was successful.</returns>
        public bool MoveTo(Tile t)
        {
            if (t.Board != this.Board) return false;

            for (int x = 0; x < this.Board.Tiles.GetLength(0); x++)
            {
                for (int y = 0; y < this.Board.Tiles.GetLength(1); y++)
                {
                    if (this.Board.Tiles[x, y] == t)
                    {
                        return this.MoveTo(x, y);
                    }
                }
            }

            return false;
        }

        /// <summary>
        /// Move the Chess piece to the specified coordinates.
        /// </summary>
        /// <param name="x">The x-coordinate to move to.</param>
        /// <param name="y">The y-coordinate to move to.</param>
        /// <returns>Whether or not the move was successful.</returns>
        public abstract bool MoveTo(int x, int y);
    }
}
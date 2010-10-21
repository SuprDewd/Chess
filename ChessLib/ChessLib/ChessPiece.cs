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

        /*/// <summary>
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
            if (t == null) return false;
            if (t.Board != this.Board) return false;

            for (int row = 0; row < this.Board.Tiles.GetLength(0); row++)
            {
                for (int column = 0; column < this.Board.Tiles.GetLength(1); column++)
                {
                    if (Object.ReferenceEquals(t, this.Board.Tiles[row, column]))
                    {
                        return this.MoveTo(row, column);
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
        public abstract bool MoveTo(int x, int y);*/
    }
}
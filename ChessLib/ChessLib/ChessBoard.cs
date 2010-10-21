using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// The main Chess board.
    /// </summary>
    public class ChessBoard
    {
        /// <summary>
        /// The tiles of the Chess board.
        /// </summary>
        public Tile[,] Tiles { get; private set; }

        /// <summary>
        /// The constructor.
        /// </summary>
        public ChessBoard()
        {
            this.Reset();
        }

        /// <summary>
        /// Resets the Chess board.
        /// </summary>
        public void Reset()
        {
            this.Tiles = new Tile[8, 8];

            for (int row = 0; row < this.Tiles.GetLength(0); row++)
            {
                for (int column = 0; column < this.Tiles.GetLength(1); column++)
                {
                    Tile t = (this.Tiles[row, column] == null ? new Tile(this, (row + column) % 2 == 0 ? ChessColor.White : ChessColor.Black) : this.Tiles[row, column]);
                    t.Piece = null;
                }
            }
        }
    }
}
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
        /// The tiles of the chess board.
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

            for (int x = 0; x < this.Tiles.GetLength(0); x++)
            {
                for (int y = 0; y < this.Tiles.GetLength(1); y++)
                {
                    this.Tiles[x, y] = new Tile(this, (x + y) % 2 == 0 ? ChessColor.White : ChessColor.Black);
                }
            }
        }
    }
}
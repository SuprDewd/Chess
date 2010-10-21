using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// A tile in the Chess board.
    /// </summary>
    public class Tile : ChessItem
    {
        /// <summary>
        /// The color of the tile.
        /// </summary>
        public ChessColor Color { get; private set; }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="color">The color of the tile.</param>
        public Tile(ChessBoard board, ChessColor color) : base(board)
        {
            this.Color = color;
        }
    }
}

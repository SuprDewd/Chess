using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// A player in a Chess game.
    /// </summary>
    public class Player : ChessItem, IColored
    {
        /// <summary>
        /// The color that the player will use.
        /// </summary>
        public ChessColor Color { get; private set; }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The board the player is playing on.</param>
        /// <param name="color">The color that the player will use.</param>
        public Player(ChessBoard board, ChessColor color) : base(board)
        {
            this.Color = color;
        }
    }
}
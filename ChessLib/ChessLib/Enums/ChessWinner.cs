using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib.Enums
{
    /// <summary>
    /// The winner of a Chess game.
    /// </summary>
    public enum ChessWinner
    {
        /// <summary>
        /// Black is the winner.
        /// </summary>
        Black = 1,
        /// <summary>
        /// White is the winner.
        /// </summary>
        White = 2,
        /// <summary>
        /// Tie.
        /// </summary>
        StaleMate = 3
    }
}

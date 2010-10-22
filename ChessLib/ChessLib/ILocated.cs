using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// A Chess item that is located on the board.
    /// </summary>
    public interface ILocated
    {
        /// <summary>
        /// The location of the item.
        /// </summary>
        Location Location { get; }
    }
}
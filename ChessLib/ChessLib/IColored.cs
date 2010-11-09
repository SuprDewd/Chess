using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ChessLib.Enums;

namespace ChessLib
{
    /// <summary>
    /// A colored item.
    /// </summary>
    public interface IColored
    {
        /// <summary>
        /// The color of the item.
        /// </summary>
        ChessColor Color { get; }
    }
}

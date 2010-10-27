using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// An interface for all Chess items.
    /// </summary>
    public interface IChessItem
    {
        /// <summary>
        /// The Chess board that the Chess item is located on.
        /// </summary>
        ChessBoard Board { get; }
    }
}

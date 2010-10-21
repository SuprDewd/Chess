using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// A Chess item.
    /// </summary>
    public abstract class ChessItem
    {
        /// <summary>
        /// The Chess board this item belongs to.
        /// </summary>
        public ChessBoard Board { get; private set; }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The Chess board this item belongs to.</param>
        public ChessItem(ChessBoard board)
        {
            this.Board = board;
        }
    }
}

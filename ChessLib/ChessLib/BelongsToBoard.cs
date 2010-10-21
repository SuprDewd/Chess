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
        /// The board where the Chess piece is located.
        /// </summary>
        public ChessBoard Board { get; private set; }

        public ChessItem(ChessBoard board)
        {
            this.Board = board;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib.Behaviours
{
    /// <summary>
    /// The direction to move into.
    /// </summary>
    public enum MovementDirection
    {
        /// <summary>
        /// Move horizontally.
        /// </summary>
        Horizontal = 1,
        /// <summary>
        /// Move vertically.
        /// </summary>
        Vertical = 2,
        /// <summary>
        /// Move diagonally.
        /// </summary>
        Diagonal = 4
    }
}

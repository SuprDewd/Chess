using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// A move.
    /// </summary>
    public struct Move
    {
        private Location _A;
        /// <summary>
        /// From.
        /// </summary>
        public Location A { get { return this._A; } }
        private Location _B;
        /// <summary>
        /// To.
        /// </summary>
        public Location B { get { return this._B; } }

        /// <summary>
        /// The constructor.
        /// </summary>
        public Move(Location a, Location b)
        {
            this._A = a;
            this._B = b;
        }
    }
}

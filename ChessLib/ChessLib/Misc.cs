using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// Miscellaneous utility methods.
    /// </summary>
    internal static class Misc
    {
        /// <summary>
        /// Executes the specified action, if the current instance is not null.
        /// </summary>
        /// <typeparam name="T">The type of the current instance.</typeparam>
        /// <param name="obj">The current instance.</param>
        /// <param name="action">The action to execute.</param>
        public static void IfNotNull<T>(this T obj, Action<T> action)
        {
            if (obj != null)
            {
                action(obj);
            }
        }
    }
}

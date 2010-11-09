using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Reflection;
using ChessLib.Pieces;
using ChessLib.Enums;

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

        /// <summary>
        /// Unions all elements in the current instance and the specified collection.
        /// </summary>
        /// <typeparam name="T">The type of the collections.</typeparam>
        /// <param name="source">The current instance.</param>
        /// <param name="other">The collection to union.</param>
        /// <returns>The current instance and the specified collection unioned.</returns>
        public static IEnumerable<T> UnionAll<T>(this IEnumerable<T> source, IEnumerable<T> other)
        {
            foreach (T item in source)
            {
                yield return item;
            }

            foreach (T item in other)
            {
                yield return item;
            }
        }

        /// <summary>
        /// Returns all items in the current instance, until the predicate returns false, and then returns one more item.
        /// </summary>
        /// <typeparam name="T">The type of the current instance.</typeparam>
        /// <param name="source">The current instance.</param>
        /// <param name="predicate">The predicate to apply on all items.</param>
        /// <returns>The items.</returns>
        public static IEnumerable<T> TakeWhileAndOneMore<T>(this IEnumerable<T> source, Func<T, bool> predicate)
        {
            foreach (T item in source)
            {
                if (predicate(item))
                {
                    yield return item;
                }
                else
                {
                    yield return item;
                    yield break;
                }
            }
        }

        /// <summary>
        /// Returns the opposite color of the colored item.
        /// </summary>
        /// <param name="c">The current instance.</param>
        /// <returns>The opposite color of the colored item.</returns>
        public static ChessColor Opposite(this ChessColor c)
        {
            return c == ChessColor.White ? ChessColor.Black : ChessColor.White;
        }

        /// <summary>
        /// Executes the specified action and returns the current instance.
        /// </summary>
        /// <typeparam name="T">The type of the current instance.</typeparam>
        /// <param name="source">The current instance.</param>
        /// <param name="action">The specified action.</param>
        /// <returns>The current instance.</returns>
        public static IEnumerable<T> Do<T>(this IEnumerable<T> source, Action action)
        {
            foreach (T item in source)
            {
                yield return item;
            }

            action();
        }

        /// <summary>
        /// Iterates through the collection and applies the specified action on each element.
        /// </summary>
        /// <typeparam name="T">The type of the current instance.</typeparam>
        /// <param name="source">The current instance.</param>
        /// <param name="action">The specified action.</param>
        /// <returns>The current instance.</returns>
        public static IEnumerable<T> Iter<T>(this IEnumerable<T> source, Action<T> action)
        {
            foreach (T item in source)
            {
                action(item);
            }

            return source;
        }

        /// <summary>
        /// Whether the piece should be used in calculations.
        /// </summary>
        /// <param name="piece">The current instance.</param>
        /// <returns>Whether the piece should be used in calculations.</returns>
        public static bool NotHere(this ChessPiece piece)
        {
            return piece == null;
        }
    }
}
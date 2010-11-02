using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace ChessLib
{
    /// <summary>
    /// A Chess move parser.
    /// </summary>
    internal static class ChessMoveParser
    {
        /// <summary>
        /// Parses a string with moves.
        /// </summary>
        /// <param name="s">The string.</param>
        /// <returns>The moves.</returns>
        public static Move[] Parse(string s)
        {
            List<Move> moves = new List<Move>();

            foreach (Match m in new Regex("(?<From>[A-H][1-8]).*?(?<To>[A-H][1-8])", RegexOptions.IgnoreCase).Matches(s))
            {
                string from = m.Groups["From"].Value;
                string to = m.Groups["To"].Value;

                try
                {
                    moves.Add(new Move(new Location(from), new Location(to)));
                }
                catch
                {
                    return moves.ToArray();
                }
            }

            return moves.ToArray();
        }
    }
}
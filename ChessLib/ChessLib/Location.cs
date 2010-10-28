using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// A location of an item.
    /// </summary>
    public struct Location
    {
        private char _File;
        /// <summary>
        /// The file, or column, of an item.
        /// </summary>
        public char File
        {
            get { return this._File; }
            set
            {
                char c = value.ToString().ToUpper().ToCharArray().First();
                if (c >= 'A' && c <= 'H')
                {
                    this._File = value;
                }
                else
                {
                    throw new Exception("Files can only be from A to H.");
                }
            }
        }


        private int _Rank;
        /// <summary>
        /// The rank, or row, of an item.
        /// </summary>
        public int Rank
        {
            get { return this._Rank; }
            set
            {
                if (value >= 1 && value <= 9)
                {
                    this._Rank = value;
                }
                else
                {
                    throw new Exception("Ranks can only be from 1 to 9.");
                }
            }
        }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="rank">The rank of the item.</param>
        /// <param name="file">The file of the item.</param>
        public Location(int rank, char file)
        {
            if (!Location.IsValid(rank, file)) throw new ArgumentException();

            this._Rank = rank;
            this._File = file;
        }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="rank">The rank of the item.</param>
        /// <param name="file">The file of the item.</param>
        public Location(int rank, int file)
        {
            if (!Location.IsValid(rank, file)) throw new ArgumentException();

            this._Rank = rank;
            this._File = Location.ConvertFile(file);
        }

        /// <summary>
        /// The equals operator.
        /// </summary>
        /// <param name="l1">A location.</param>
        /// <param name="l2">A location.</param>
        /// <returns>Whether or not the locations are the same.</returns>
        public static bool operator ==(Location l1, Location l2)
        {
            return l1.File == l2.File && l1.Rank == l2.Rank;
        }

        /// <summary>
        /// The not equals operator.
        /// </summary>
        /// <param name="l1">A location.</param>
        /// <param name="l2">A location.</param>
        /// <returns>Whether or not the locations are not the same.</returns>
        public static bool operator !=(Location l1, Location l2)
        {
            return !(l1 == l2);
        }

        /// <see cref="Object.Equals(object)"/>
        public override bool Equals(object obj)
        {
            if (!(obj is Location)) return false;

            return (Location)obj == this;
        }

        /// <see cref="Object.GetHashCode()"/>
        public override int GetHashCode()
        {
            return base.GetHashCode();
        }

        /// <see cref="Object.ToString()"/>
        public override string ToString()
        {
            return this.File.ToString() + this.Rank.ToString();
        }

        /// <summary>
        /// Converts a file between int and char.
        /// </summary>
        /// <param name="file">The file.</param>
        /// <returns>The file as an int.</returns>
        public static int ConvertFile(char file)
        {
            char c = file.ToString().ToUpper()[0];

            if (c >= 'A' && c <= 'H')
            {
                return c - 'A' + 1;
            }
            else
            {
                throw new Exception("Files can only be from A to H.");
            }
        }

        /// <summary>
        /// Converts a file between int and char.
        /// </summary>
        /// <param name="file">The file.</param>
        /// <returns>The file as a char.</returns>
        public static char ConvertFile(int file)
        {
            if (file >= 1 && file <= 9)
            {
                return (char)(file + 'A' - 1);
            }
            else
            {
                throw new Exception("Files can only be from A to H.");
            }
        }

        /// <summary>
        /// Checks whether the specified rank and file are valid.
        /// </summary>
        /// <param name="rank">The rank.</param>
        /// <param name="file">The file.</param>
        /// <returns>Whether the specified rank and file are valid.</returns>
        public static bool IsValid(int rank, char file)
        {
            char uCase = file.ToString().ToUpper()[0];
            return (rank >= 1 && rank <= 8 && uCase >= 'A' && uCase <= 'H');
        }

        /// <summary>
        /// Checks whether the specified rank and file are valid.
        /// </summary>
        /// <param name="rank">The rank.</param>
        /// <param name="file">The file.</param>
        /// <returns>Whether the specified rank and file are valid.</returns>
        public static bool IsValid(int rank, int file)
        {
            return (rank >= 1 && rank <= 8 && file >= 1 && file <= 8);
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// The main Chess board.
    /// </summary>
    public class ChessBoard
    {
        private readonly Dictionary<Location, ChessPiece> StartingPieces;

        /// <summary>
        /// The tiles of the Chess board.
        /// </summary>
        private Tile[,] Tiles { get; set; }

        /// <summary>
        /// The constructor.
        /// </summary>
        public ChessBoard()
        {
            this.StartingPieces = new Dictionary<Location, ChessPiece>
            {
                {new Location(8, 'A'), new Rook(this, ChessColor.Black)},
                {new Location(8, 'B'), new Knight(this, ChessColor.Black)},
                {new Location(8, 'C'), new Bishop(this, ChessColor.Black)},
                {new Location(8, 'D'), new Queen(this, ChessColor.Black)},
                {new Location(8, 'E'), new King(this, ChessColor.Black)},
                {new Location(8, 'F'), new Bishop(this, ChessColor.Black)},
                {new Location(8, 'G'), new Knight(this, ChessColor.Black)},
                {new Location(8, 'H'), new Rook(this, ChessColor.Black)},

                {new Location(7, 'A'), new Pawn(this, ChessColor.Black)},
                {new Location(7, 'B'), new Pawn(this, ChessColor.Black)},
                {new Location(7, 'C'), new Pawn(this, ChessColor.Black)},
                {new Location(7, 'D'), new Pawn(this, ChessColor.Black)},
                {new Location(7, 'E'), new Pawn(this, ChessColor.Black)},
                {new Location(7, 'F'), new Pawn(this, ChessColor.Black)},
                {new Location(7, 'G'), new Pawn(this, ChessColor.Black)},
                {new Location(7, 'H'), new Pawn(this, ChessColor.Black)},

                {new Location(1, 'A'), new Rook(this, ChessColor.White)},
                {new Location(1, 'B'), new Knight(this, ChessColor.White)},
                {new Location(1, 'C'), new Bishop(this, ChessColor.White)},
                {new Location(1, 'D'), new Queen(this, ChessColor.White)},
                {new Location(1, 'E'), new King(this, ChessColor.White)},
                {new Location(1, 'F'), new Bishop(this, ChessColor.White)},
                {new Location(1, 'G'), new Knight(this, ChessColor.White)},
                {new Location(1, 'H'), new Rook(this, ChessColor.White)},

                {new Location(2, 'A'), new Pawn(this, ChessColor.White)},
                {new Location(2, 'B'), new Pawn(this, ChessColor.White)},
                {new Location(2, 'C'), new Pawn(this, ChessColor.White)},
                {new Location(2, 'D'), new Pawn(this, ChessColor.White)},
                {new Location(2, 'E'), new Pawn(this, ChessColor.White)},
                {new Location(2, 'F'), new Pawn(this, ChessColor.White)},
                {new Location(2, 'G'), new Pawn(this, ChessColor.White)},
                {new Location(2, 'H'), new Pawn(this, ChessColor.White)},
            };

            this.Reset();
        }

        /// <summary>
        /// Resets the Chess board.
        /// </summary>
        public void Reset()
        {
            this.Tiles = new Tile[8, 8];

            for (int row = 0; row < this.Tiles.GetLength(0); row++)
            {
                for (int column = 0; column < this.Tiles.GetLength(1); column++)
                {
                    Location curLoc = new Location(row + 1, column + 1);
                    ChessPiece piece = (from p in this.StartingPieces where p.Key == curLoc select p.Value).SingleOrDefault();
                    Tile t = (this.Tiles[row, column] == null ? new Tile(this, curLoc, (row + column) % 2 == 0 ? ChessColor.Black : ChessColor.White) : this.Tiles[row, column]);
                    t.Piece = piece;

                    this.Tiles[row, column] = t;
                }
            }
        }

        #region Indexers

        /// <summary>
        /// Gives access to the tiles of the Chess board.
        /// </summary>
        /// <param name="rank">The rank of the tile.</param>
        /// <param name="file">The file of the tile.</param>
        /// <returns>The tile at the specified rank and file.</returns>
        public Tile this[int rank, char file]
        {
            get
            {
                return this.Tiles[rank - 1, Location.ConvertFile(file) - 1];
            }
        }

        /// <summary>
        /// Gives access to the tiles of the Chess board.
        /// </summary>
        /// <param name="rank">The rank of the tile.</param>
        /// <param name="file">The file of the tile.</param>
        /// <returns>The tile at the specified rank and file.</returns>
        public Tile this[int rank, int file]
        {
            get
            {
                return this.Tiles[rank - 1, file - 1];
            }
        }

        /// <summary>
        /// Gives access to the tiles of the Chess board.
        /// </summary>
        /// <param name="l">The location of the tile.</param>
        /// <returns>The tile at the specified rank and file.</returns>
        public Tile this[Location l]
        {
            get
            {
                return this[l.Rank, l.File];
            }
        }

        /// <summary>
        /// Gives access to the tiles of the Chess board.
        /// </summary>
        /// <param name="l">The location of the tile.</param>
        /// <returns>The tile at the specified rank and file.</returns>
        public Tile this[string l]
        {
            get
            {
                return this[Convert.ToInt32(l[1].ToString()), l[0]];
            }
        }

        #endregion
    }
}
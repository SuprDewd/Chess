using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// A tile in the Chess board.
    /// </summary>
    public class Tile : ChessItem, IColored
    {
        /// <summary>
        /// The color of the tile.
        /// </summary>
        public ChessColor Color { get; private set; }
        /// <summary>
        /// The piece positioned on the tile.
        /// </summary>
        /// <remarks>This will be null if no piece is positioned on the tile.</remarks>
        public ChessPiece Piece { get; internal set; }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="color">The color of the tile.</param>
        public Tile(ChessBoard board, ChessColor color, ChessPiece piece = null)
            : base(board)
        {
            this.Color = color;
            this.Piece = piece;
        }

        /// <summary>
        /// Move the Chess piece on the specified tile to the current tile.
        /// </summary>
        /// <param name="t">The tile which has the Chess piece.</param>
        /// <returns>Whether or not the Chess piece could be moved.</returns>
        public bool To(Tile t)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Move the Chess piece on the specified tile to the current tile.
        /// </summary>
        /// <param name="row">The row in which the Chess piece is located.</param>
        /// <param name="column">The column in which the Chess piece is located.</param>
        /// <returns>Whether or not the Chess piece could be moved.</returns>
        public bool To(int row, int column)
        {
            return this.To(this.Board.Tiles[row, column]);
        }
    }
}

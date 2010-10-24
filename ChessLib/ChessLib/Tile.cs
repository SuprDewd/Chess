using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// A tile in the Chess board.
    /// </summary>
    public class Tile : BelongsTo<ChessBoard>, IColored, ILocated
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
        /// The location of the tile.
        /// </summary>
        public Location Location { get; private set; }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The board in which the tile is located.</param>
        /// <param name="location">The location of the tile.</param>
        /// <param name="color">The color of the tile.</param>
        /// <param name="piece">The Chess piece that is on the tile.</param>
        public Tile(ChessBoard board, Location location, ChessColor color, ChessPiece piece = null)
            : base(board)
        {
            this.Location = location;
            this.Color = color;
            this.Piece = piece;
        }

        /// <summary>
        /// Moves the piece on the current tile to the specified tile.
        /// </summary>
        /// <param name="t">The location.</param>
        /// <returns>Whether or not the move was successful.</returns>
        public bool To(Tile t)
        {
            if (this.Piece == null) return false;
            if (t.Piece != null && t.Piece.Color == this.Piece.Color) return false;
            if (!this.Piece.AllValidMoves.Contains(t)) return false;

            // TODO: Implement more logic.

            if (t.Piece != null)
            {
                t.Piece.Capture();
            }

            this.Piece.Tile = t;
            t.Piece = this.Piece;
            this.Piece = null;

            return true;
        }

        /// <summary>
        /// Moves the piece on the current tile to the specified location.
        /// </summary>
        /// <param name="l">The location.</param>
        /// <returns>Whether or not the move was successful.</returns>
        public bool To(Location l)
        {
            return this.To(this.Owner[l]);
        }

        /// <see cref="Object.ToString()"/>
        public override string ToString()
        {
            return this.Location.ToString();
        }
    }
}

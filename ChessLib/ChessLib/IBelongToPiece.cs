using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ChessLib.Pieces;

namespace ChessLib
{
    /// <summary>
    /// An interface for all classes that belong to a Chess piece.
    /// </summary>
    public interface IBelongToPiece
    {
        /// <summary>
        /// The Chess piece that the class belongs to.
        /// </summary>
        ChessPiece Piece { get; }
    }
}
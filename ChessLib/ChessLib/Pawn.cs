﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// The Pawn Chess piece.
    /// </summary>
    public class Pawn : ChessPiece
    {
        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The board where the Chess piece is located.</param>
        /// <param name="color">The color of the Chess piece.</param>
        /// <param name="tile">The tile where the Chess piece is located.</param>
        public Pawn(ChessBoard board, ChessColor color, Tile tile = null)
            : base(board, color, tile)
        {

        }

        /// <summary>
        /// All possible moves this Chess piece can move.
        /// </summary>
        /// <remarks>This does not check whether other Chess pieces are in the way.</remarks>
        public override IEnumerable<Tile> AllMoves
        {
            get
            {
                int rnxt = this.Location.Rank + (this.Color == ChessColor.White ? 1 : -1);
                if (Location.IsValid(rnxt, this.Location.File)) yield return this.Board[rnxt, this.Location.File];

                if (this.Color == ChessColor.White && this.Location.Rank == 2)
                {
                    yield return this.Board[4, this.Location.File];
                }
                else if (this.Color == ChessColor.Black && this.Location.Rank == 7)
                {
                    yield return this.Board[5, this.Location.File];
                }
            }
        }

        /// <summary>
        /// All possible moves this Chess piece can move, which are valid.
        /// </summary>
        public override IEnumerable<Tile> AllValidMoves
        {
            get
            {
                return this.AllMoves.Where(t => t.Piece == null || t.Piece.Color != this.Color);
            }
        }

        /// <summary>
        /// The name of the Chess piece.
        /// </summary>
        public override string PieceName { get { return "Pawn"; } }
    }
}

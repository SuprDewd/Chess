﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ChessLib.Behaviours;

namespace ChessLib
{
    /// <summary>
    /// The Knight Chess piece.
    /// </summary>
    public class Knight : ChessPiece
    {
        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The board where the Chess piece is located.</param>
        /// <param name="color">The color of the Chess piece.</param>
        /// <param name="square">The square where the Chess piece is located.</param>
        public Knight(ChessBoard board, ChessColor color, Square square = null)
            : base(board, color, square)
        {
            this.Movement = new KnightMovement(this);
        }

        /// <summary>
        /// The name of the Chess piece.
        /// </summary>
        public override string PieceName { get { return "Knight"; } }
    }
}
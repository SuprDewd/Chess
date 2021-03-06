﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ChessLib.Behaviours;
using ChessLib.Enums;

namespace ChessLib.Pieces
{
    /// <summary>
    /// A Chess piece.
    /// </summary>
    public abstract class ChessPiece : IChessItem, IColored
    {
        /// <summary>
        /// The color of the Chess piece.
        /// </summary>
        public ChessColor Color { get; internal protected set; }
        /// <summary>
        /// The Chess board on which the Chess piece is located.
        /// </summary>
        public ChessBoard Board { get; internal set; }
        /// <summary>
        /// The square on which the Chess piece is located.
        /// </summary>
        public Square Square { get; internal set; }
        /// <summary>
        /// The location of the square on which the Chess piece is located.
        /// </summary>
        public Location Location { get { return this.Square.Location; } }
        /// <summary>
        /// The movement behaviour of the Chess piece.
        /// </summary>
        protected internal MovementBehaviour Movement { get; set; }

        /// <summary>
        /// How many times the Chess piece has been moved.
        /// </summary>
        public int MoveCount { get; protected internal set; }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The board where the Chess piece is located.</param>
        /// <param name="color">The color of the Chess piece.</param>
        /// <param name="square">The square where the Chess piece is located.</param>
        public ChessPiece(ChessBoard board, ChessColor color, Square square)
        {
            this.Board = board;
            this.Color = color;
            this.Square = square;
        }

        /// <summary>
        /// Resets the Chess piece.
        /// </summary>
        /// <param name="s">The square that the Chess piece belongs to.</param>
        public virtual void Reset(Square s)
        {
            this.MoveCount = 0;
            this.Square = s;
        }

        /// <summary>
        /// All the moves that the Chess piece is able to move.
        /// </summary>
        public IEnumerable<Square> Moves { get { return this.Movement.Moves; } }
        /// <summary>
        /// All the moves that the Chess piece is able to move, that are also valid.
        /// </summary>
        public IEnumerable<Square> ValidMoves { get { return this.Movement.ValidMoves; } }
        /// <summary>
        /// All valid moves, that will not result in the king being checked etc.
        /// </summary>
        public IEnumerable<Square> TotallyValidMoves { get { return this.Movement.TotallyValidMoves; } }

        /// <summary>
        /// The name of the Chess piece.
        /// </summary>
        public abstract string PieceName { get; }

        /// <summary>
        /// The name of the Chess piece, prepended with the first character of the color.
        /// </summary>
        public string PieceNameShort
        {
            get
            {
                return this.Color.ToString().Substring(0, 1) + this.PieceName;
            }
        }

        /// <see cref="Object.ToString()"/>
        public override string ToString()
        {
            return this.Color.ToString() + " " + this.PieceName;
        }
    }
}
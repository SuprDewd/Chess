using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ChessLib.Behaviours;

namespace ChessLib
{
    /// <summary>
    /// The King Chess piece.
    /// </summary>
    public class King : ChessPiece
    {
        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="board">The board where the Chess piece is located.</param>
        /// <param name="color">The color of the Chess piece.</param>
        /// <param name="square">The square where the Chess piece is located.</param>
        public King(ChessBoard board, ChessColor color, Square square = null)
            : base(board, color, square)
        {
            this.Movement = new KingMovement(this);
        }

        /// <summary>
        /// Whether the king is checked or not.
        /// </summary>
        public bool Checked
        {
            get
            {
                return this.Square.IsAttacked;
            }
        }

        /// <summary>
        /// The pieces that are checking the King.
        /// </summary>
        public IEnumerable<ChessPiece> CheckingPieces
        {
            get
            {
                return (from s in this.Board where s.Piece != null && s.Piece.ValidMoves.Contains(this.Square) select s.Piece);
            }
        }

        /// <summary>
        /// Whether the king is checkmated or not.
        /// </summary>
        public bool CheckMated
        {
            get
            {
                return this.Checked && !this.Movement.ValidMoves.Any();
            }
        }

        /// <summary>
        /// The name of the Chess piece.
        /// </summary>
        public override string PieceName { get { return "King"; } }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    class TempPiece
    {
        public ChessPiece Piece { get; set; }
        public int MoveCount { get; set; }

        public TempPiece(ChessPiece piece)
        {
            this.Piece = piece;
            if (this.Piece != null) this.MoveCount = piece.MoveCount;
        }
    }
}
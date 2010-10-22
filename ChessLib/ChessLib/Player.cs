using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    public class Player : ChessItem, IColored
    {
        public ChessColor Color { get; private set; }

        public Player(ChessBoard board, ChessColor color) : base(board)
        {
            this.Color = color;
        }
    }
}
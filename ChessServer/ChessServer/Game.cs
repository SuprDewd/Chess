using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ChessLib;

namespace ChessServer
{
    public class Game
    {
        public ChessBoard Board { get; private set; }
        public Player[] Players { get; private set; }

        public Game(Player p1, Player p2)
        {
            p1.Color = ChessColor.White;
            p2.Color = ChessColor.Black;

            p1.Game = this;
            p2.Game = this;

            this.Board = new ChessBoard();
            this.Players = new Player[2] { p1, p2 };
        }

        public void Start()
        {
            this.Board.GameEnded += (cb, cw) =>
                {
                    if (cw == ChessWinner.StaleMate)
                    {
                        this.SendAll("msg Game over. Stalemate.");
                    }
                    else
                    {
                        this.SendAll("msg Game over. " + cw.ToString() + " won!");
                    }

                    this.SendAll("bye");

                    foreach (Player p in this.Players)
                    {
                        p.Game = null;
                    }
                };

            this.SendAll("hi");

            int turn = 0;

            while (!this.Board.GameOver)
            {
                this.Players[turn].YourTurn();

                turn = turn == 0 ? 1 : 0;
            }
        }

        public void SendAll(string s)
        {
            foreach (Player p in this.Players)
            {
                p.Send(s);
            }
        }

        public void End(ChessColor c)
        {
            this.SendAll("msg " + c.ToString() + " quit the game.");
            this.SendAll("bye");

            foreach (Player p in this.Players)
            {
                p.Client.Close();
            }
        }

        public bool Move(string a, string b)
        {
            try
            {
                if (this.Board[a].To(this.Board[b]))
                {
                    this.SendAll("mv " + a + " " + b);
                    return true;
                }
            }
            catch { }

            return false;
        }
    }
}
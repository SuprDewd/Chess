using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ChessLib;
using SharpBag.Net;

namespace ChessServer
{
    public class ChessServerGame : IDisposable
    {
        protected Dictionary<string, Action<TcpClientHandler, string>> Actions { get; set; }
        public ChessServerPlayer WhitePlayer { get; private set; }
        public ChessServerPlayer BlackPlayer { get; private set; }
        private ChessServer Server { get; set; }
        public ChessBoard Board { get; private set; }
        private ChessWinner Results { get; set; }

        public ChessServerGame(ChessServer server, ChessServerPlayer white, ChessServerPlayer black)
        {
            this.Actions = new Dictionary<string, Action<TcpClientHandler, string>>
            {
                {"Move", ActionMove}
            };

            this.Server = server;
            this.Board = new ChessBoard();
            this.Board.GameEnded += (b, w) => { this.Results = w; };

            this.WhitePlayer = white;
            this.BlackPlayer = black;

            this.WhitePlayer.Client.Disconnected += PlayerDisconnected;
            this.BlackPlayer.Client.Disconnected += PlayerDisconnected;

            this.WhitePlayer.Client.SendMessage("Welcome White " + this.BlackPlayer.ToString());
            this.BlackPlayer.Client.SendMessage("Welcome Black " + this.WhitePlayer.ToString());

            this.NextTurn();
        }

        private void PlayerDisconnected(TcpClientHandler player)
        {
            this.SendMessageToAll("GameQuit");
            this.Dispose();
        }

        private void SendMessageToAll(string message)
        {
            this.WhitePlayer.Client.SendMessage(message);
            this.BlackPlayer.Client.SendMessage(message);
        }

        protected internal void ReceivedMessage(TcpClientHandler client, string message)
        {
            if (this.BlackPlayer.Client != client && this.WhitePlayer.Client != client) return;

            Tuple<string, string> parts = this.Server.GetParts(message);

            if (this.Actions.ContainsKey(parts.Item1))
            {
                this.Actions[parts.Item1](client, parts.Item2);
            }
            else
            {
                client.SendMessage("WTF");
            }
        }

        private void ActionMove(TcpClientHandler client, string message)
        {
            if ((this.Board.Turn == ChessColor.White && client == this.WhitePlayer.Client) || (this.Board.Turn == ChessColor.Black && client == this.BlackPlayer.Client))
            {
                string[] sqs = message.Split(new char[]{' '}, StringSplitOptions.RemoveEmptyEntries);
                if (this.Board[sqs[0]].To(this.Board[sqs[1]]))
                {
                    this.SendMessageToAll("Moved " + sqs[0] + " " + sqs[1]);
                    this.NextTurn();
                }
            }
        }

        private void NextTurn()
        {
            if (this.Board.GameOver)
            {
                this.SendMessageToAll("GameOver " + (this.Results == ChessWinner.Black ? "Black Wins!" : this.Results == ChessWinner.White ? "White Wins!" : "Stalemate!"));
                this.Dispose();
            }
            else (this.Board.Turn == ChessColor.White ? this.WhitePlayer : this.BlackPlayer).Client.SendMessage("YourTurn");
        }

        public override string ToString()
        {
            return "White: " + (this.WhitePlayer.Name ?? this.WhitePlayer.Client.Client.Client.RemoteEndPoint.ToString()) + ", Black: " + (this.BlackPlayer.Name ?? this.BlackPlayer.Client.Client.Client.RemoteEndPoint.ToString());
        }

        public void Dispose()
        {
            try
            {
                this.Server.Games.Remove(this);
            }
            catch { }
        }
    }
}
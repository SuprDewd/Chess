using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ChessLib;
using SharpBag.Net;
using ChessLib.Enums;

namespace ChessLib.Server
{
    /// <summary>
    /// A Chess game on a Chess server.
    /// </summary>
    public class ChessServerGame : IDisposable
    {
        /// <summary>
        /// The actions.
        /// </summary>
        protected Dictionary<string, Action<TcpClientHandler, string>> Actions { get; set; }
        /// <summary>
        /// The white player.
        /// </summary>
        public ChessServerPlayer WhitePlayer { get; private set; }
        /// <summary>
        /// The black player.
        /// </summary>
        public ChessServerPlayer BlackPlayer { get; private set; }
        /// <summary>
        /// The server.
        /// </summary>
        private ChessServer Server { get; set; }
        /// <summary>
        /// The Chess board.
        /// </summary>
        public ChessBoard Board { get; private set; }
        /// <summary>
        /// The results of the game.
        /// </summary>
        private ChessWinner Results { get; set; }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="server">The server.</param>
        /// <param name="white">The white player.</param>
        /// <param name="black">The black player.</param>
        public ChessServerGame(ChessServer server, ChessServerPlayer white, ChessServerPlayer black)
        {
            this.Actions = new Dictionary<string, Action<TcpClientHandler, string>>
            {
                {"Move", ActionMove},
                {"Send", ActionSend}
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

            this.Server.Logger.Log("Game created: " + this.ToString());
        }

        /// <summary>
        /// A method that handles player disconnections.
        /// </summary>
        /// <param name="player">The player that disconnected.</param>
        private void PlayerDisconnected(TcpClientHandler player)
        {
            this.SendMessageToAll("GameQuit");
            this.Dispose();
        }

        /// <summary>
        /// Send a message to all the players.
        /// </summary>
        /// <param name="message">The message to send.</param>
        private void SendMessageToAll(string message)
        {
            this.WhitePlayer.Client.SendMessage(message);
            this.BlackPlayer.Client.SendMessage(message);
        }

        /// <summary>
        /// A method that handles receiving messages.
        /// </summary>
        /// <param name="client">The client the message came from.</param>
        /// <param name="message">The message.</param>
        protected internal void ReceivedMessage(TcpClientHandler client, string message)
        {
            try
            {
                if (this.BlackPlayer.Client != client && this.WhitePlayer.Client != client) return;

                Tuple<string, string> parts = ChessServer.GetParts(message);

                if (this.Actions.ContainsKey(parts.Item1))
                {
                    this.Actions[parts.Item1](client, parts.Item2);
                }
                else
                {
                    client.SendMessage("WTF");
                }
            }
            catch { }
        }

        #region Actions

        /// <summary>
        /// The send action.
        /// </summary>
        /// <param name="client">The client that sent the message.</param>
        /// <param name="message">The move.</param>
        private void ActionSend(TcpClientHandler client, string message)
        {
            string name = (client == this.BlackPlayer.Client ? this.BlackPlayer.Name : this.WhitePlayer.Name);

            this.SendMessageToAll("GameSend " + (name ?? client.Client.Client.RemoteEndPoint.ToString()) + ": " + message);
        }

        /// <summary>
        /// The move action.
        /// </summary>
        /// <param name="client">The client that moved.</param>
        /// <param name="message">The move.</param>
        private void ActionMove(TcpClientHandler client, string message)
        {
            if ((this.Board.Turn == ChessColor.White && client == this.WhitePlayer.Client) || (this.Board.Turn == ChessColor.Black && client == this.BlackPlayer.Client))
            {
                string[] sqs = message.Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
                if (this.Board[sqs[0]].To(this.Board[sqs[1]]))
                {
                    this.Server.Logger.LogIf(this.Server.Debug, "Move: " + message + " (" + client.Client.Client.RemoteEndPoint.ToString() + ")");
                    this.SendMessageToAll("Moved " + sqs[0] + " " + sqs[1]);
                    this.NextTurn();
                }
                else
                {
                    this.Server.Logger.LogIf(this.Server.Debug, "Invalid move: " + message + " (" + client.Client.Client.RemoteEndPoint.ToString() + ")");
                    client.SendMessage("YourTurn");
                }
            }
        }

        #endregion

        /// <summary>
        /// Progresses the game to the next turn.
        /// </summary>
        private void NextTurn()
        {
            if (this.Board.GameOver)
            {
                this.SendMessageToAll("GameOver " + (this.Results == ChessWinner.Black ? "Black" : this.Results == ChessWinner.White ? "White" : "Stalemate"));
                this.Dispose();
            }
            else (this.Board.Turn == ChessColor.White ? this.WhitePlayer : this.BlackPlayer).Client.SendMessage("YourTurn");
        }

        /// <see cref="Object.ToString()"/>
        public override string ToString()
        {
            return "White: " + (this.WhitePlayer.Name ?? this.WhitePlayer.Client.Client.Client.RemoteEndPoint.ToString()) + ", Black: " + (this.BlackPlayer.Name ?? this.BlackPlayer.Client.Client.Client.RemoteEndPoint.ToString());
        }

        /// <see cref="IDisposable.Dispose()"/>
        public void Dispose()
        {
            try
            {
                this.Server.Games.Remove(this);

                this.WhitePlayer.Client.Disconnected -= PlayerDisconnected;
                this.BlackPlayer.Client.Disconnected -= PlayerDisconnected;

                this.Server.Logger.Log("Game disposed: " + this.ToString());

                this.Server.UpdateAllPlayerLists();
            }
            catch { }
        }
    }
}
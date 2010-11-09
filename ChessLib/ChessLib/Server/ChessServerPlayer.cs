using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SharpBag.Net;
using SharpBag;
using SharpBag.Logging;
using System.Net;
using System.IO;
using System.Net.Sockets;

namespace ChessLib.Server
{
    /// <summary>
    /// A Chess server player.
    /// </summary>
    public class ChessServerPlayer : IDisposable
    {
        /// <summary>
        /// The actions.
        /// </summary>
        protected Dictionary<string, Action<TcpClientHandler, string>> Actions { get; set; }
        /// <summary>
        /// The Tcp client handler.
        /// </summary>
        protected internal TcpClientHandler Client { get; protected set; }
        /// <summary>
        /// The server.
        /// </summary>
        protected ChessServer Server { get; set; }

        /// <summary>
        /// The name of the Chess player.
        /// </summary>
        public string Name { get; protected set; }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="server">The server.</param>
        /// <param name="client">The client.</param>
        public ChessServerPlayer(ChessServer server, TcpClientHandler client)
        {
            this.Actions = new Dictionary<string, Action<TcpClientHandler, string>>
            {
                {"ListPlayers", ActionListPlayers},
                {"Quit",        ActionPlayerQuit},
                {"Play",        ActionPlay},
                {"PlayOk",      ActionPlayOk},
                {"SetName",     ActionSetName},
                {"Game",        ActionGame},
                {"Send",        ActionSend}
            };

            this.Server = server;
            client.MessageReceived += MessageReceived;
            client.Disconnected += Disconnected;
            this.Client = client;
            this.Client.PingInterval = 2000;
        }

        /// <summary>
        /// Handles receiving messages.
        /// </summary>
        /// <param name="client">The client sending the message.</param>
        /// <param name="message">The message.</param>
        private void MessageReceived(TcpClientHandler client, string message)
        {
            this.Server.Logger.LogIf(this.Server.Debug, "Received message: " + message);

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

        /// <summary>
        /// An action for sending client a list of all the players.
        /// </summary>
        /// <param name="client">The client sending the message.</param>
        /// <param name="message">The message.</param>
        private void ActionListPlayers(TcpClientHandler client, string message)
        {
            StringBuilder sb = new StringBuilder("ListPlayers ");

            foreach (ChessServerPlayer c in this.Server.Clients)
            {
                if (c.Client != this.Client)
                {
                    sb.Append(c.Client.Client.Client.RemoteEndPoint.ToString());
                    sb.Append(':');
                    sb.AppendLine(c.Name ?? "");
                }
            }

            this.Client.SendMessage(sb.ToString());
        }

        /// <summary>
        /// An action for changing the name of a player.
        /// </summary>
        /// <param name="client">The client sending the message.</param>
        /// <param name="message">The message.</param>
        private void ActionSetName(TcpClientHandler client, string message)
        {
            this.Name = message;
            this.Server.UpdateAllPlayerLists();
        }

        /// <summary>
        /// An action for sending messages to all players.
        /// </summary>
        /// <param name="client">The client sending the message.</param>
        /// <param name="message">The message.</param>
        private void ActionSend(TcpClientHandler client, string message)
        {
            this.Server.Shout(message);
        }

        /// <summary>
        /// An action to handle a player that is leaving.
        /// </summary>
        /// <param name="client">The client that is leaving.</param>
        /// <param name="message">The message.</param>
        private void ActionPlayerQuit(TcpClientHandler client, string message)
        {
            this.Disconnected(client);
        }

        /// <summary>
        /// An action that forwards messages to the correct game.
        /// </summary>
        /// <param name="client">The client sending the message.</param>
        /// <param name="message">The message.</param>
        private void ActionGame(TcpClientHandler client, string message)
        {
            this.Server.Games.FirstOrDefault(g => g.WhitePlayer.Client == client || g.BlackPlayer.Client == client).IfNotNull(a => a.ReceivedMessage(client, message));
        }

        /// <summary>
        /// An action that handles play requests.
        /// </summary>
        /// <param name="client">The client requesting to play.</param>
        /// <param name="message">The message.</param>
        private void ActionPlay(TcpClientHandler client, string message)
        {
            ChessServerPlayer playClient = this.Server.Clients.FirstOrDefault(p => p.Client.Client.Client.RemoteEndPoint.ToString() == message);
            if (playClient == null) return;
            if (playClient.Client == client) return;
            if (this.Server.Games.Any(g => g.WhitePlayer == playClient || g.BlackPlayer == playClient)) return;

            playClient.Client.SendMessage("Play " + client.Client.Client.RemoteEndPoint.ToString());
        }

        /// <summary>
        /// An action that handles starting games.
        /// </summary>
        /// <param name="client">The client.</param>
        /// <param name="message">The message.</param>
        private void ActionPlayOk(TcpClientHandler client, string message)
        {
            ChessServerPlayer playClient = this.Server.Clients.FirstOrDefault(p => p.Client.Client.Client.RemoteEndPoint.ToString() == message);
            if (playClient == null) return;
            if (playClient.Client == client) return;
            if (this.Server.Games.Any(g => g.WhitePlayer == playClient || g.BlackPlayer == playClient)) return;

            this.Server.Games.Add(new ChessServerGame(this.Server, playClient, this));
        }

        /// <summary>
        /// A method that handles a disconnected client.
        /// </summary>
        /// <param name="client">The client that disconnected.</param>
        private void Disconnected(TcpClientHandler client)
        {
            this.Server.Clients.Remove(this);
            this.Server.UpdateAllPlayerLists();
            this.Client.Dispose();
        }

        /// <summary>
        /// The == operator.
        /// </summary>
        /// <param name="a">Player a.</param>
        /// <param name="b">Player b.</param>
        /// <returns>Whether a and b are the same player.</returns>
        public static bool operator ==(ChessServerPlayer a, ChessServerPlayer b)
        {
            try
            {
                return a.Client == b.Client;
            }
            catch
            {
                return false;
            }
        }

        /// <summary>
        /// The != operator.
        /// </summary>
        /// <param name="a">Player a.</param>
        /// <param name="b">Player b.</param>
        /// <returns>Whether a and b are not the same player.</returns>
        public static bool operator !=(ChessServerPlayer a, ChessServerPlayer b)
        {
            return a.Client != b.Client;
        }

        /// <see cref="Object.Equals(object)"/>
        public override bool Equals(object obj)
        {
            try
            {
                if (!(obj is ChessServerPlayer)) return false;

                return this.Client.Equals((obj as ChessServerPlayer).Client);
            }
            catch
            {
                return false;
            }
        }

        /// <see cref="IDisposable.Dispose()"/>
        public void Dispose()
        {
            this.Client.SendMessage("G2G");
            this.Client.Dispose();
        }

        /// <see cref="Object.ToString()"/>
        public override string ToString()
        {
            return this.Client.Client.Client.RemoteEndPoint.ToString() + ":" + (this.Name ?? "");
        }

        /// <summary>Appends the string representation of the player to the specified StringBuilder.</summary>
        /// <param name="sb">The StringBuilder to append to.</param>
        protected internal void ToString(StringBuilder sb)
        {
            sb.Append(this.Client.Client.Client.RemoteEndPoint.ToString());
            sb.Append(':');
            sb.Append(this.Name ?? "");
        }
    }
}
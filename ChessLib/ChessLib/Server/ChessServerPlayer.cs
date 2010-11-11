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
    /// A server-side Chess player.
    /// </summary>
    public class ChessServerPlayer : IDisposable
    {
        /// <summary>
        /// The actions.
        /// </summary>
        protected Dictionary<string, Action<string>> Actions { get; set; }
        /// <summary>
        /// The Tcp client handler.
        /// </summary>
        public TcpClientHandler Client { get; protected set; }
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
            this.Actions = new Dictionary<string, Action<string>>
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
            try
            {
                this.Server.Logger.LogIf(this.Server.Debug, "Received message: " + message);

                Tuple<string, string> parts = ChessServer.GetParts(message);

                if (this.Actions.ContainsKey(parts.Item1))
                {
                    this.Actions[parts.Item1](parts.Item2);
                }
                else
                {
                    this.Client.SendMessage("WTF");
                }
            }
            catch { }
        }

        #region Actions

        /// <summary>
        /// An action for sending client a list of all the players.
        /// </summary>
        /// <param name="message">The message.</param>
        private void ActionListPlayers(string message)
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
        /// <param name="message">The message.</param>
        private void ActionSetName(string message)
        {
            this.Name = message;
            this.Server.UpdateAllPlayerLists();
        }

        /// <summary>
        /// An action for sending messages to all players.
        /// </summary>
        /// <param name="message">The message.</param>
        private void ActionSend(string message)
        {
            this.Server.Shout((this.Name ?? this.Client.Client.Client.RemoteEndPoint.ToString()) + ": " + message);
        }

        /// <summary>
        /// An action to handle a player that is leaving.
        /// </summary>
        /// <param name="message">The message.</param>
        private void ActionPlayerQuit(string message)
        {
            this.Disconnected(this.Client);
        }

        /// <summary>
        /// An action that forwards messages to the correct game.
        /// </summary>
        /// <param name="message">The message.</param>
        private void ActionGame(string message)
        {
            this.Server.Games.FirstOrDefault(g => g.WhitePlayer.Client == this.Client || g.BlackPlayer.Client == this.Client).IfNotNull(a => a.ReceivedMessage(this.Client, message));
        }

        /// <summary>
        /// An action that handles play requests.
        /// </summary>
        /// <param name="message">The message.</param>
        private void ActionPlay(string message)
        {
            ChessServerPlayer playClient = this.Server.Clients.FirstOrDefault(p => p.Client.Client.Client.RemoteEndPoint.ToString() == message);
            if (playClient == null) return;
            if (playClient.Client == this.Client) return;
            if (this.Server.Games.Any(g => g.WhitePlayer == playClient || g.BlackPlayer == playClient)) return;

            playClient.Client.SendMessage("Play " + this.Client.Client.Client.RemoteEndPoint.ToString());
        }

        /// <summary>
        /// An action that handles starting games.
        /// </summary>
        /// <param name="message">The message.</param>
        private void ActionPlayOk(string message)
        {
            ChessServerPlayer playClient = this.Server.Clients.FirstOrDefault(p => p.Client.Client.Client.RemoteEndPoint.ToString() == message);
            if (playClient == null) return;
            if (playClient.Client == this.Client) return;
            if (this.Server.Games.Any(g => g.WhitePlayer == playClient || g.BlackPlayer == playClient)) return;

            this.Server.Games.Add(new ChessServerGame(this.Server, playClient, this));
        }

        #endregion

        /// <summary>
        /// A method that handles a disconnected client.
        /// </summary>
        /// <param name="client">The disconnecting client.</param>
        private void Disconnected(TcpClientHandler client)
        {
            string s;

            try
            {
                s = ": " + client.Client.Client.RemoteEndPoint.ToString();
            }
            catch { s = "."; };

            this.Server.Clients.Remove(this);
            this.Server.UpdateAllPlayerLists();
            this.Client.Dispose();
            this.Server.Logger.Log("Player disconnected" + s);
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

        /// <see cref="Object.GetHashCode()"/>
        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
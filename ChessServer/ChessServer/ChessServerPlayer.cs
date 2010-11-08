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

namespace ChessServer
{
    public class ChessServerPlayer : IDisposable
    {
        protected Dictionary<string, Action<TcpClientHandler, string>> Actions { get; set; }
        protected internal TcpClientHandler Client { get; protected set; }
        protected ChessServer Server { get; set; }
        protected internal List<ChessServerGame> Games { get; protected set; }

        /// <summary>
        /// The name of the Chess player.
        /// </summary>
        public string Name { get; protected set; }

        public ChessServerPlayer(ChessServer server, TcpClientHandler client)
        {
            this.Actions = new Dictionary<string, Action<TcpClientHandler, string>>
            {
                {"ListPlayers", ActionListPlayers},
                {"Quit",        ActionPlayerQuit},
                {"Play",        ActionPlay},
                {"SetName",     ActionSetName},
                {"Game",        ActionGame}
            };

            this.Server = server;
            client.MessageReceived += MessageReceived;
            client.Disconnected += Disconnected;
            this.Client = client;
        }

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

        private void ActionSetName(TcpClientHandler client, string message)
        {
            this.Name = message;
            this.Server.UpdateAllPlayerLists();
        }

        private void ActionPlayerQuit(TcpClientHandler client, string message)
        {
            this.Disconnected(client);
        }

        private void ActionGame(TcpClientHandler client, string message)
        {
            this.Games.FirstOrDefault(g => g.WhitePlayer.Client == client || g.BlackPlayer.Client == client).IfNotNull(a => a.ReceivedMessage(client, message));
        }

        private void ActionPlay(TcpClientHandler client, string message)
        {
            ChessServerPlayer playClient = this.Server.Clients.FirstOrDefault(p => p.Client.Client.Client.RemoteEndPoint.ToString() == message);
            if (playClient == null) return;
            if (playClient.Client == client) return;
            if (this.Server.Games.Any(g => g.WhitePlayer == playClient || g.BlackPlayer == playClient)) return;

            this.Server.Games.Add(new ChessServerGame(this.Server, this, playClient));
        }

        private void Disconnected(TcpClientHandler client)
        {
            this.Client.Dispose();
            this.Server.Clients.Remove(this);
            this.Server.UpdateAllPlayerLists();
        }

        public static bool operator ==(ChessServerPlayer a, ChessServerPlayer b)
        {
            return a.Client == b.Client;
        }

        public static bool operator !=(ChessServerPlayer a, ChessServerPlayer b)
        {
            return a.Client != b.Client;
        }

        public override bool Equals(object obj)
        {
            if (!(obj is ChessServerPlayer)) return false;

            return this.Client.Equals((obj as ChessServerPlayer).Client);
        }

        public void Dispose()
        {
            this.Client.SendMessage("G2G");
            this.Client.Dispose();
        }

        public override string ToString()
        {
            return this.Client.Client.Client.RemoteEndPoint.ToString() + ":" + (this.Name ?? "");
        }

        protected internal void ToString(StringBuilder sb)
        {
            sb.Append(this.Client.Client.Client.RemoteEndPoint.ToString());
            sb.Append(':');
            sb.Append(this.Name ?? "");
        }
    }
}
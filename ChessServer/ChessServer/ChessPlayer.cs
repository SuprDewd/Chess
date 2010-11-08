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
    public class ChessPlayer : IDisposable
    {
        protected Dictionary<string, Action<TcpClientHandler, string>> Actions { get; set; }
        protected internal TcpClientHandler Client { get; protected set; }
        protected ChessServer Server { get; set; }

        /// <summary>
        /// The name of the Chess player.
        /// </summary>
        public string Name { get; protected set; }

        public ChessPlayer(ChessServer server, TcpClientHandler client)
        {
            this.Actions = new Dictionary<string, Action<TcpClientHandler, string>>
            {
                {"ListPlayers", ActionListPlayers},
                {"Quit",        ActionPlayerQuit},
                {"Play",        ActionPlay},
                {"SetName",     ActionSetName}
            };

            this.Server = server;
            client.MessageReceived += MessageReceived;
            client.Disconnected += Disconnected;
            this.Client = client;
        }

        private void MessageReceived(TcpClientHandler client, string message)
        {
            this.Server.Logger.LogIf(this.Server.Debug, "Received message: " + message);

            Tuple<string, string> parts = this.GetParts(message);

            if (this.Actions.ContainsKey(parts.Item1))
            {
                this.Actions[parts.Item1](client, parts.Item2);
            }
            else
            {
                client.SendMessage("WTF");
            }
        }

        private Tuple<string, string> GetParts(string message)
        {
            int space = message.IndexOf(' ');

            if (space >= 0)
            {
                return new Tuple<string, string>(message.Substring(0, space), message.Substring(space));
            }
            else return new Tuple<string, string>(message, "");
        }

        private void ActionListPlayers(TcpClientHandler client, string message)
        {
            StringBuilder sb = new StringBuilder("ListPlayers ");

            foreach (ChessPlayer c in this.Server.Clients)
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

        }

        private void ActionPlay(TcpClientHandler client, string message)
        {

        }

        private void Disconnected(TcpClientHandler client)
        {
            this.Client.Dispose();
            this.Server.Clients.Remove(this);
        }

        public static bool operator ==(ChessPlayer a, ChessPlayer b)
        {
            return a.Client == b.Client;
        }

        public static bool operator !=(ChessPlayer a, ChessPlayer b)
        {
            return a.Client != b.Client;
        }

        public override bool Equals(object obj)
        {
            return base.Equals(obj);
        }

        public void Dispose()
        {
            this.Client.SendMessage("G2G");
            this.Client.Dispose();
        }
    }
}

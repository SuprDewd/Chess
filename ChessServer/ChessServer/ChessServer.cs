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
    public class ChessServer : IDisposable
    {
        protected TcpServer Server { get; set; }
        protected internal List<ChessServerPlayer> Clients { get; set; }
        protected internal List<ChessServerGame> Games { get; set; }
        protected internal Logger Logger { get; protected set; }

        public bool Debug { get; set; }

        public ChessServer(IEnumerable<int> ports, Logger logger, bool debug = false)
        {
            this.Debug = debug;
            this.Logger = logger;
            this.Clients = new List<ChessServerPlayer>();
            this.Games = new List<ChessServerGame>();
            this.Server = TcpServer.Create(ports);
            this.Server.ClientReceived += ClientReceived;

            this.Logger.Log("Chess server started listening on " + this.Server.Listener.Server.LocalEndPoint.ToString() + ".");
        }

        private void ClientReceived(TcpServer server, TcpClientHandler client)
        {
            this.Logger.Log("Client connected from " + client.Client.Client.RemoteEndPoint.ToString() + ".");
            this.Clients.Add(new ChessServerPlayer(this, client));
            this.UpdateAllPlayerLists();
        }

        protected internal Tuple<string, string> GetParts(string message)
        {
            int space = message.IndexOf(' ');

            if (space >= 0)
            {
                return new Tuple<string, string>(message.Substring(0, space), message.Substring(space));
            }
            else return new Tuple<string, string>(message, "");
        }

        internal void UpdateAllPlayerLists()
        {
            foreach (ChessServerPlayer player in this.Clients)
            {
                this.SendAllPlayers(player);
            }
        }

        private void SendAllPlayers(ChessServerPlayer client)
        {
            StringBuilder sb = new StringBuilder("ListPlayers ");

            foreach (ChessServerPlayer c in this.Clients)
            {
                if (c.Client != client.Client)
                {
                    c.ToString(sb);
                    sb.AppendLine();
                }
            }

            client.Client.SendMessage(sb.ToString());
        }

        public void Dispose()
        {
            foreach (ChessServerGame game in this.Games)
            {
                game.Dispose();
            }

            foreach (ChessServerPlayer player in this.Clients)
            {
                player.Dispose();
            }

            this.Server.Dispose();
        }
    }
}
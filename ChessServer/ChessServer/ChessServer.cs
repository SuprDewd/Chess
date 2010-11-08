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
        protected internal List<ChessPlayer> Clients { get; set; }
        protected internal Logger Logger { get; protected set; }

        public bool Debug { get; set; }

        public ChessServer(IEnumerable<int> ports, Logger logger)
        {
            this.Debug = false;
            this.Logger = logger;
            this.Clients = new List<ChessPlayer>();
            this.Server = TcpServer.Create(ports);
            this.Server.ClientReceived += ClientReceived;

            this.Logger.Log("Chess server started listening on " + this.Server.Listener.Server.RemoteEndPoint.ToString() + ".");
        }

        private void ClientReceived(TcpServer server, TcpClientHandler client)
        {
            this.Logger.Log("Client connected from " + client.Client.Client.RemoteEndPoint.ToString() + ".");
            this.Clients.Add(new ChessPlayer(this, client));
            this.UpdateAllPlayerLists();
        }

        internal void UpdateAllPlayerLists()
        {
            foreach (ChessPlayer player in this.Clients)
            {
                this.SendAllPlayers(player);
            }
        }

        private void SendAllPlayers(ChessPlayer client)
        {
            StringBuilder sb = new StringBuilder("ListPlayers ");

            foreach (ChessPlayer c in this.Clients)
            {
                if (c.Client != client.Client)
                {
                    sb.Append(c.Client.Client.Client.RemoteEndPoint.ToString());
                    sb.Append(':');
                    sb.AppendLine(c.Name ?? "");
                }
            }

            client.Client.SendMessage(sb.ToString());
        }

        public void Dispose()
        {
            foreach (ChessPlayer player in this.Clients)
            {
                player.Dispose();
            }

            this.Server.Dispose();
        }
    }
}

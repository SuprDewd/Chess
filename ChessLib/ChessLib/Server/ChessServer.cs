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
    /// A Chess server.
    /// </summary>
    public class ChessServer : IDisposable
    {
        /// <summary>
        /// The Tcp Server.
        /// </summary>
        protected TcpServer Server { get; set; }
        /// <summary>
        /// A list of clients.
        /// </summary>
        protected internal List<ChessServerPlayer> Clients { get; set; }
        /// <summary>
        /// A list of games.
        /// </summary>
        protected internal List<ChessServerGame> Games { get; set; }
        /// <summary>
        /// The logger.
        /// </summary>
        protected internal Logger Logger { get; protected set; }

        /// <summary>
        /// Whether the server should log debug messages.
        /// </summary>
        public bool Debug { get; set; }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="ports">A collection of port numbers. The first free port will be used.</param>
        /// <param name="logger">The logger.</param>
        /// <param name="debug">Whether the server should log debug messages.</param>
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

        /// <summary>
        /// An event that is fired when a client is received.
        /// </summary>
        /// <param name="server">The server.</param>
        /// <param name="client">The client.</param>
        private void ClientReceived(TcpServer server, TcpClientHandler client)
        {
            this.Logger.Log("Client connected from " + client.Client.Client.RemoteEndPoint.ToString() + ".");
            this.Clients.Add(new ChessServerPlayer(this, client));
            this.UpdateAllPlayerLists();
        }

        /// <summary>
        /// Gets the action to call and the message.
        /// </summary>
        /// <param name="message">The message to split.</param>
        /// <returns>The action to call and the message.</returns>
        protected internal Tuple<string, string> GetParts(string message)
        {
            int split = Math.Min(message.IndexOf(' '), message.IndexOf('.'));

            if (split >= 0)
            {
                return new Tuple<string, string>(message.Substring(0, split), message.Substring(split + 1));
            }
            else return new Tuple<string, string>(message, "");
        }

        /// <summary>
        /// Gets the ip, port and username of the client.
        /// </summary>
        /// <param name="cParts">The parts.</param>
        /// <returns>The ip, port and username of the client.</returns>
        protected internal Tuple<string, int, string> GetClientParts(string cParts)
        {
            List<string> parts = cParts.Split(':').ToList();

            string ip = parts[0];
            parts.RemoveAt(0);
            int port = parts[0].ToInt();
            parts.RemoveAt(0);

            return new Tuple<string, int, string>(ip, port, String.Join(":", parts.ToArray()));
        }

        /// <summary>
        /// Updates all player lists.
        /// </summary>
        internal void UpdateAllPlayerLists()
        {
            foreach (ChessServerPlayer player in this.Clients)
            {
                this.SendAllPlayers(player);
            }
        }

        /// <summary>
        /// Shouts a message to all the players.
        /// </summary>
        /// <param name="message">The message.</param>
        public void Shout(string message)
        {
            foreach (ChessServerPlayer player in this.Clients)
            {
                try
                {
                    player.Client.SendMessage("Send " + message);
                }
                catch { }
            }
        }

        /// <summary>
        /// Sends a list of all the players to the specifed client, except for himself.
        /// </summary>
        /// <param name="client">The specified client.</param>
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

        /// <see cref="IDisposable.Dispose()"/>
        public void Dispose()
        {
            foreach (ChessServerPlayer player in this.Clients)
            {
                player.Dispose();
            }

            this.Server.Dispose();
        }
    }
}
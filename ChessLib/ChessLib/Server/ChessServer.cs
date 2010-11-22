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
        public List<ChessServerPlayer> Clients { get; set; }
        /// <summary>
        /// A list of games.
        /// </summary>
        public List<ChessServerGame> Games { get; set; }
        /// <summary>
        /// The logger.
        /// </summary>
        public Logger Logger { get; protected set; }

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
            this.Initialize(TcpServer.Create(ports), logger, debug);
        }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="ip">The ip to listen to.</param>
        /// <param name="ports">A collection of port numbers. The first free port will be used.</param>
        /// <param name="logger">The logger.</param>
        /// <param name="debug">Whether the server should log debug messages.</param>
        public ChessServer(IPAddress ip, IEnumerable<int> ports, Logger logger, bool debug = false)
        {
            this.Initialize(new TcpServer(new TcpListener(ip, ports.First(p => Internet.IsPortFree(p)))), logger, debug);
        }

        private void Initialize(TcpServer server, Logger logger, bool debug = false)
        {
            this.Debug = debug;
            this.Logger = logger;
            this.Clients = new List<ChessServerPlayer>();
            this.Games = new List<ChessServerGame>();
            this.Server = server;
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
        internal static Tuple<string, string> GetParts(string message)
        {
            int bsplit = message.IndexOf(' ');
            int psplit = message.IndexOf('.');

            int split = bsplit;
            if (psplit < split && psplit != -1)
            {
                split = psplit;
            }

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
        public static Tuple<string, int, string> GetClientParts(string cParts)
        {
            List<string> parts = cParts.Split(':').ToList();

            string ip = parts[0];
            parts.RemoveAt(0);
            int port = Convert.ToInt32(parts[0]);
            parts.RemoveAt(0);

            return new Tuple<string, int, string>(ip, port, String.Join(":", parts.ToArray()));
        }

        /// <summary>
        /// Updates all player lists.
        /// </summary>
        internal void UpdateAllPlayerLists()
        {
            for (int i = 0; i < this.Clients.Count; i++)
            {
                try
                {
                    this.SendAllPlayers(this.Clients[i]);
                }
                catch { }
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

            foreach (ChessServerPlayer c in this.Clients.Where(c => c != client && !this.Games.Any(g => g.BlackPlayer == c || g.WhitePlayer == c)))
            {
                c.ToString(sb);
                sb.AppendLine();
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
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
        private TcpServer Server { get; set; }
        private List<TcpClientHandler> Clients { get; set; }
        private Logger Logger { get; set; }

        public ChessServer(IEnumerable<int> ports, Logger logger)
        {
            this.Logger = logger;
            this.Clients = new List<TcpClientHandler>();
            this.Server = TcpServer.Create(ports);
            this.Server.ClientReceived += new Action<TcpServer, TcpClientHandler>(ClientReceived);

            this.Logger.Log("Chess server started listening on " + this.Server.Listener.Server.RemoteEndPoint.ToString() + ".");
        }

        private void ClientReceived(TcpServer server, TcpClientHandler client)
        {
            this.Logger.Log("Client connected from " + client.Client.Client.RemoteEndPoint.ToString() + ".");

            client.MessageReceived += new Action<TcpClientHandler, string>(MessageReceived);
        }

        private void MessageReceived(TcpClientHandler client, string message)
        {
            this.Logger.Log("Received message: " + message);

            // TODO: 
        }

        public void Dispose()
        {
            this.Server.Dispose();
        }
    }
}

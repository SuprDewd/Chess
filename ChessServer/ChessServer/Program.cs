using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SharpBag;
using SharpBag.Net;
using SharpBag.IO;
using SharpBag.Logging;
using ChessLib;
using System.Net;
using System.Net.Sockets;

namespace ChessServer
{
    public class Program
    {
        private static Logger Logger;
        private static ChessServer Server;

        public static void Main(string[] args)
        {
            InteractiveConsole IConsole = new InteractiveConsole();
            Logger = new Logger(s => IConsole.WriteLine(s));

            string[] quitMsgs = new string[] { "QUIT", "STOP", "EXIT", "END", "Q" };

            using (Server = new ChessServer(1337.To(13337), Logger))
            {
                string msg = null;

                do
                {
                    msg = IConsole.ReadCommand().Trim().ToUpper();
                    ParseMessage(msg);
                } while (!quitMsgs.Contains(msg));
            }

            Environment.Exit(0);
        }

        private static void ParseMessage(string msg)
        {
            if (msg == "LISTPLAYERS")
            {
                Logger.Log("Players (" + Server.Clients.Count + "):");
                foreach (ChessServerPlayer client in Server.Clients)
                {
                    Logger.Log(client.Client.Client.Client.RemoteEndPoint.ToString());
                }
            }
            else if (msg == "LISTGAMES")
            {
                Logger.Log("Games (" + Server.Games.Count + "):");
                foreach (ChessServerGame game in Server.Games)
                {
                    Logger.Log(game.ToString());
                }
            }
        }
    }
}
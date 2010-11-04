using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using SharpBag;
using SharpBag.Logging;
using SharpBag.Net;
using System.Net.Sockets;
using System.Net;
using System.IO;

namespace ChessServer
{
    public static class Program
    {
        public static InteractiveConsole IConsole;
        public static Logger Log;
        public static TcpListener Listener;
        public static Thread ListenerThread;
        public static List<Player> Players;

        public static void Main(string[] args)
        {
            Log = new Logger(s => IConsole.WriteLine(s), true);
            Log.Timeformat = "HH:mm:ss: ";
            IConsole = new InteractiveConsole();
            Players = new List<Player>();

            int port = 20000.To(40000).FirstOrDefault(p => Internet.IsPortFree(p));
            if (port == default(int))
            {
                Log.Log("No free port. Quitting.");
                IConsole.ReadCommand();
                ParseInput("EXIT");
            }

            IPAddress ip = Internet.LocalIPAddresses().FirstOrDefault(p => p.AddressFamily == AddressFamily.InterNetwork);
            ip = ip ?? Internet.LocalIPAddresses().First();
            if (ip == default(IPAddress))
            {
                Log.Log("No IP address to listen to. Quitting.");
                IConsole.ReadCommand();
                ParseInput("EXIT");
            }

            Listener = new TcpListener(ip, port);
            ListenerThread = new Thread(Listen);
            ListenerThread.Start();
            Log.Log("Listening on " + Listener.LocalEndpoint.ToString());

            while (true)
            {
                string s = IConsole.ReadCommand();
                Log.Log(s);
                ParseInput(s);
            }
        }

        public static void ParseInput(string s)
        {
            string st = s.Trim().ToUpper();

            if (st == "STOP" || st == "QUIT" || st == "EXIT" || st == "Q")
            {
                Listener.Stop();
                IConsole.Stop();
                Environment.Exit(0);
            }
            else if (st == "LS" || st == "LIST" || st == "PLAYERS")
            {
                Log.Log("All Players (" + Players.Count() + "):");
                foreach (Player p in Players)
                {
                    Log.Log(p.Client.Client.RemoteEndPoint.ToString() + (p.Game == null ? "" : " (Playing)"));
                }
            }
        }

        public static void Listen()
        {
            Listener.Start();

            while (true)
            {
                if (!Listener.Pending())
                {
                    Thread.Sleep(500);
                    continue;
                }

                new Thread(new ParameterizedThreadStart(HandleClient)).Start(Listener.AcceptTcpClient());
            }
        }

        public static void HandleClient(object o)
        {
            Player p = null;

            using (TcpClient client = (TcpClient)o)
            {
                try
                {
                    NetworkStream ns = client.GetStream();

                    p = new Player(client, ns);
                    Players.Add(p);

                    Log.Log("Player connected: " + client.Client.RemoteEndPoint.ToString());

                    while (true)
                    {
                        if (p.Game != null) { Thread.Sleep(500); continue; }

                        string s = p.Receive();

                        if (s == "q")
                        {
                            client.Close();
                            Log.Log("Player disconnected: " + client.Client.RemoteEndPoint.ToString());
                            Thread.CurrentThread.Abort();
                            return;
                        }
                        else if (s == "ls")
                        {
                            StringBuilder sb = new StringBuilder();

                            lock (Players)
                            {
                                foreach (Player pl in Players.Where(i => i.Game == null && i != p))
                                {
                                    sb.AppendLine(pl.Client.Client.RemoteEndPoint.ToString());
                                }
                            }

                            p.Send(sb.ToString());
                        }
                        else if (s.StartsWith("p "))
                        {
                            s = s.Substring(2);

                            Player pl;

                            lock (Players)
                            {
                                pl = Players.FirstOrDefault(i => i.Game == null && i != p && i.Client.Client.RemoteEndPoint.ToString() == s);
                            }

                            if (pl != null)
                            {
                                try
                                {
                                    pl.Send("p " + p.Client.Client.RemoteEndPoint.ToString());
                                    if (pl.Receive() == "y")
                                    {
                                        if (p.Game != null)
                                        {
                                            new Thread(new ThreadStart(new Game(p, pl).Start)).Start();
                                        }
                                    }
                                    else p.Send("na Player declined request.");
                                }
                                catch
                                {
                                    p.Send("na Error contacting player.");
                                }
                            }
                            else p.Send("na Player does not exist or is in a game.");
                        }
                    }
                }
                catch
                {
                    try
                    {
                        Players.Remove(p);
                        Log.Log("Player disconnected: " + client.Client.RemoteEndPoint.ToString());
                    }
                    catch { }
                }
            }
        }
    }
}
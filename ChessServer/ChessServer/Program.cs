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

        public static void Main(string[] args)
        {
            Log = new Logger(s => IConsole.WriteLine(s), true);
            Log.Timeformat = "HH:mm:ss: ";
            IConsole = new InteractiveConsole();

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

            if (st == "STOP" || st == "QUIT" || st == "EXIT")
            {
                Listener.Stop();
                IConsole.Stop();
                Environment.Exit(0);
            }
        }

        public static void Listen()
        {
            Listener.Start();

            while (true)
            {
                if (!Listener.Pending()) Thread.Sleep(250);

                new Thread(new ParameterizedThreadStart(HandleClient)).Start(Listener.AcceptTcpClient());
            }
        }

        public static void HandleClient(object o)
        {
            using (TcpClient client = (TcpClient)o)
            {
                NetworkStream ns = client.GetStream();
                BinaryReader br = new BinaryReader(ns);
                BinaryWriter bw = new BinaryWriter(ns);

                while (true)
                {
                    string s = br.ReadString();

                    if (s == "q")
                    {
                        client.Close();
                        Thread.CurrentThread.Abort();
                        return;
                    }
                }
            }
        }
    }
}
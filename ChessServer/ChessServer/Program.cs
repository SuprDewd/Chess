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
        public static void Main(string[] args)
        {
            InteractiveConsole IConsole = new InteractiveConsole();
            Logger logger = new Logger(s => IConsole.WriteLine(s));

            using (ChessServer server = new ChessServer(1337.To(13337), logger))
            {

            }
        }
    }
}
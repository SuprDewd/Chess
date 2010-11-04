using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ChessLib;
using System.IO;
using System.Net.Sockets;

namespace ChessServer
{
    public class Player
    {
        public ChessColor Color { get; internal protected set; }
        public TcpClient Client { get; private set; }
        public BinaryReader Reader { get; private set; }
        public BinaryWriter Writer { get; private set; }
        public Game Game { get; internal set; }

        public Player(TcpClient client, NetworkStream ns) : this(client, new BinaryReader(ns), new BinaryWriter(ns)){}
        public Player(TcpClient client, BinaryReader br, BinaryWriter bw)
        {
            this.Client = client;
            this.Reader = br;
            this.Writer = bw;
        }

        public void Send(string s)
        {
            try
            {
                this.Writer.Write(s);
            }
            catch
            {
                this.Quit();
            }
        }

        public string Receive()
        {
            try
            {
                return this.Reader.ReadString();
            }
            catch
            {
                return "q";
            }
        }

        private bool _Quit = false;
        public void Quit()
        {
            if (this._Quit) return;
            this._Quit = true;

            this.Game.End(this.Color);

            try
            {
                Program.Players.Remove(this);
            }
            catch { }
        }

        public void YourTurn()
        {
            if (this.Game == null) return;

            this.Send("yt");
            this.ParseResponse(this.Receive());
        }

        public bool ParseResponse(string s)
        {
            if (s == "q")
            {
                this.Quit();
                return true;
            }
            else if (s.StartsWith("mv ") && this.Game != null)
            {
                s = s.Substring(3);
                string[] splits = s.Split(' ');

                return this.Game.Move(splits[0], splits[1]);
            }

            return false;
        }
    }
}
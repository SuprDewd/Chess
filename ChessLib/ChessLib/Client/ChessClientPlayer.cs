using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ChessLib.Controls;
using SharpBag.Net;
using System.IO;
using System.Net.Security;
using System.Net;
using ChessLib.Server;
using ChessLib.Enums;
using System.Net.Sockets;
using SharpBag;

namespace ChessLib.Client
{
    /// <summary>
    /// A client-side Chess player.
    /// </summary>
    public class ChessClientPlayer
    {
        /// <summary>
        /// The Chess board.
        /// </summary>
        public ChessBoardControl BoardControl { get; private set; }
        private TcpClientHandler _Client = null;
        /// <summary>
        /// The client handler.
        /// </summary>
        public TcpClientHandler Client
        {
            get { return this._Client; }
            private set
            {
                this._Client = value;

                try
                {
                    this._Client.Disconnected += ServerDisconnectedHandler;
                    this._Client.MessageReceived += MessageReceived;
                    this._Client.PingInterval = 2000;
                }
                catch { }
            }
        }
        /// <summary>
        /// The actions.
        /// </summary>
        protected Dictionary<string, Action<string>> Actions { get; set; }

        /// <summary>
        /// Whether the player is in a game.
        /// </summary>
        public bool InGame { get; private set; }
        /// <summary>
        /// Whether it's the players turn.
        /// </summary>
        public bool MyTurn { get { return this.BoardControl.Turn; } private set { this.BoardControl.Turn = value; } }

        /// <summary>
        /// An event that is fired when the player list updates.
        /// </summary>
        public event Action<ChessClientPlayer, string[]> PlayerListUpdated;
        /// <summary>
        /// An event that is fired when a chat message is received.
        /// </summary>
        public event Action<ChessClientPlayer, string> ChatMessageReceived;
        /// <summary>
        /// An event that is fired when an in-game chat message is received.
        /// </summary>
        public event Action<ChessClientPlayer, string> GameChatMessageReceived;
        /// <summary>
        /// An event that is fired when the player enter or exits a game.
        /// </summary>
        public event Action<ChessClientPlayer, bool> InGameChanged;
        /// <summary>
        /// An event that is fired when the server disconnects.
        /// </summary>
        public event Action<ChessClientPlayer> ServerDisconnected;
        /// <summary>
        /// An event that is fired when the game is over.
        /// </summary>
        public event Action<ChessClientPlayer, ChessWinner> GameOver;

        private string _Name = null;
        /// <summary>
        /// The name of the player.
        /// </summary>
        public string Name
        {
            get { return this._Name; }
            set { this._Name = value; this.Client.IfNotNull(c => c.SendMessage("SetName " + this._Name)); }
        }

        /// <summary>
        /// A function that returns whether a play request is accepted.
        /// </summary>
        public Func<ChessClientPlayer, string, bool> PlayRequest { get; set; }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="boardControl">The Chess board control.</param>
        /// <param name="client">The client.</param>
        public ChessClientPlayer(ChessBoardControl boardControl, TcpClientHandler client = null)
        {
            this.Actions = new Dictionary<string, Action<string>>
            {
                {"ListPlayers", ActionListPlayers},
                {"Play",        ActionPlay},
                {"Send",        ActionSend},
                {"GameSend",    ActionGameSend},
                {"Moved",       ActionMoved},
                {"Welcome",     ActionWelcome},
                {"GameQuit",    ActionGameQuit},
                {"YourTurn",    ActionYourTurn},
                {"G2G",         ActionG2G},
                {"GameOver",    ActionGameOver}
              //{"WTF",         ActionWTF}
            };

            this.BoardControl = boardControl;

            this.InGame = false;
            this.MyTurn = false;

            this.BoardControl.Moved = (b, m) => { this.MyTurn = false; this.Move(m); return false; };
            this.Client = client;
        }

        /// <summary>
        /// Disconnects from the server.
        /// </summary>
        public void Disconnect()
        {
            this.Client.Dispose();
            this.Client = null;
        }

        private void Disconnected(TcpClientHandler client)
        {
            this.ServerDisconnected.IfNotNull(a => a(this));
        }

        /// <summary>
        /// Connects to the specifed hostname and port.
        /// </summary>
        /// <param name="hostname">The hostname.</param>
        /// <param name="port">The port.</param>
        /// <returns>Whether the connect was successful.</returns>
        public bool Connect(string hostname, int port)
        {
            try
            {
                this.Client = new TcpClientHandler(new TcpClient(hostname, port), ping: 2000);
                if (this.Name != null) this.SendMessage("SetName " + this.Name);
                return true;
            }
            catch
            {
                return false;
            }
        }

        /// <summary>
        /// Makes the server send an updated player list.
        /// </summary>
        public void ListPlayers()
        {
            this.SendMessage("ListPlayers");
        }

        #region Actions

        private void ActionGameOver(string message)
        {
            this.MyTurn = false;
            this.InGame = false;
            this.BoardControl.Board.Reset();
            this.BoardControl.InvokeIfRequired(() => this.BoardControl.Repaint());

            this.GameOver.IfNotNull(a => a(this, message == "White" ? ChessWinner.White : message == "Black" ? ChessWinner.Black : ChessWinner.StaleMate));
        }

        private void ActionG2G(string message)
        {
            this.ServerDisconnectedHandler(this.Client);
        }

        private void ActionYourTurn(string message)
        {
            this.MyTurn = true;
        }

        private void ActionGameQuit(string message)
        {
            this.InGame = false;
            this.MyTurn = false;
            this.BoardControl.Board.Reset();
            this.BoardControl.InvokeIfRequired(() => this.BoardControl.Repaint());

            this.GameChatMessageReceived.IfNotNull(a => a(this, "A player quit the game."));
            this.InGameChanged.IfNotNull(a => a(this, this.InGame));
        }

        private void ActionWelcome(string message)
        {
            this.InGame = true;
            int space = message.IndexOf(' ');
            ChessColor color = message.Substring(0, space) == "White" ? ChessColor.White : ChessColor.Black;
            this.BoardControl.InvokeIfRequired(() => this.BoardControl.Player = color);
            this.InGameChanged.IfNotNull(a => a(this, this.InGame));
            //message = message.Substring(space + 1);
            //Tuple<string, int, string> cParts = ChessServer.GetClientParts(message);
        }

        private void ActionMoved(string message)
        {
            if (!this.InGame) return;

            string[] split = message.Split(' ');

            this.BoardControl.Board[split[0]].To(this.BoardControl.Board[split[1]]);
            this.BoardControl.InvokeIfRequired(() => this.BoardControl.Repaint());
        }

        private void ActionGameSend(string message)
        {
            this.GameChatMessageReceived.IfNotNull(a => a(this, message));
        }

        private void ActionSend(string message)
        {
            this.ChatMessageReceived.IfNotNull(a => a(this, message));
        }

        private void ActionPlay(string message)
        {
            if (this.PlayRequest == null || this.PlayRequest(this, message))
            {
                this.SendMessage("PlayOk " + message);
            }
        }

        private void ActionListPlayers(string message)
        {
            this.PlayerListUpdated.IfNotNull(a => a(this, message.Split(new char[] { '\n' }, StringSplitOptions.RemoveEmptyEntries)));
        }

        #endregion

        private void MessageReceived(TcpClientHandler client, string message)
        {
            try
            {
                Tuple<string, string> parts = ChessServer.GetParts(message);

                if (this.Actions.ContainsKey(parts.Item1))
                {
                    this.Actions[parts.Item1](parts.Item2);
                }
            }
            catch { }
        }

        /// <summary>
        /// Sends the move to the server.
        /// </summary>
        /// <param name="m">The move.</param>
        public void Move(Move m)
        {
            this.SendMessage("Game Move " + m.A.ToString() + " " + m.B.ToString());
        }

        /// <summary>
        /// Sends a message to the server.
        /// </summary>
        /// <param name="message">The message.</param>
        private void SendMessage(string message)
        {
            this.Client.IfNotNull(c => c.SendMessage(message));
        }

        /// <summary>
        /// Sends an in-game chat message.
        /// </summary>
        /// <param name="message">The message.</param>
        public void SendChatMessage(string message)
        {
            this.SendMessage("Send " + message);
        }

        /// <summary>
        /// Sends an in-game chat message.
        /// </summary>
        /// <param name="message">The message.</param>
        public void SendGameChatMessage(string message)
        {
            this.SendMessage("Game Send " + message);
        }

        /// <summary>
        /// Sends a play request to the specified player.
        /// </summary>
        /// <param name="player">The player.</param>
        public void Play(string player)
        {
            this.SendMessage("Play " + player);
        }

        private void ServerDisconnectedHandler(TcpClientHandler client)
        {
            this.InGame = false;
            this.MyTurn = false;
            this.BoardControl.Board.Reset();
            this.BoardControl.Repaint();

            this.ChatMessageReceived.IfNotNull(a => a(this, "Server disconnected."));
            this.ServerDisconnected.IfNotNull(a => a(this));
        }
    }
}
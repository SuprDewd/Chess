using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;
using ChessLib.Client;
using ChessLib.Server;
using SharpBag;
using SharpBag.Net;
using System.Threading;
using ChessLib;

namespace Chess
{
    /// <summary>
    /// Interaction logic for Client.xaml
    /// </summary>
    public partial class Client : Window
    {
        public ChessGame Board { get; private set; }
        public ChessClientPlayer Player { get; private set; }

        public Client()
        {
            InitializeComponent();

            this.Player = new ChessClientPlayer();
            this.Player.PlayerListUpdated += (p, l) =>
            {
                this.PlayerList.InvokeIfRequired(() =>
                {
                    this.PlayerList.ItemsSource = (from i in l
                                                   let split = ChessServer.GetClientParts(i)
                                                   select new { Name = split.Item3.Trim() != "" ? split.Item3 : split.Item1 + ":" + split.Item2, Ip = split.Item1 + ":" + split.Item2 }).ToArray();
                });
            };
            this.Player.ChatMessageReceived += (p, m) =>
            {
                this.txtChat.InvokeIfRequired(() =>
                {
                    this.txtChat.Text += m + Environment.NewLine;
                    this.txtChat.ScrollToEnd();
                });
            };

            this.Player.ServerDisconnected += p =>
            {
                this.Player.Disconnect();
                this.InvokeIfRequired(() => { this.ToggleConnect(true); this.PlayerList.ItemsSource = null; });
                this.Player.Name = null;
            };

            this.Player.InGameChanged += GameChanged;

            this.Player.PlayRequest = (p, m) =>
            {
                return MessageBox.Show(m + " challanged you to a chess game." + Environment.NewLine + "Do you want to play?", "Game Invitation", MessageBoxButton.YesNo) == MessageBoxResult.Yes;
            };

            this.Host.Text = Internet.LocalIPAddresses.FirstOrDefault(i => i.AddressFamily == System.Net.Sockets.AddressFamily.InterNetwork).ToString() ?? "127.0.0.1";
            int port = 1337.To(1350).FirstOrDefault(i => !Internet.IsPortFree(i));
            this.Port.Text = port != 0 ? port.ToString() : "1337";
            this.PlayerName.Focus();
        }

        private void Log(string s)
        {
            this.txtChat.InvokeIfRequired(() =>
                {
                    this.txtChat.Text += s + Environment.NewLine;
                });
        }

        private void GameChanged(ChessClientPlayer player, bool inGame)
        {
            if (inGame)
            {
                this.InvokeIfRequired(() =>
                    {
                        this.Board = this.CreateGame();
                        this.Board.Player = this.Player;
                        this.Toggle(false);
                        this.Board.Show();
                        this.Board.Activate();
                    });
            }
            else
            {
                this.InvokeIfRequired(() =>
                {
                    this.Toggle(true);
                    this.Activate();
                });
            }
        }

        private ChessGame CreateGame()
        {
            ChessGame game = new ChessGame();
            game.Player = this.Player;
            game.cbcBoard.Turn = false;
            game.txtTurn.Text = "Other Players Turn";
            game.cbcBoard.Moved = (b, m) =>
            {
                Square A = game.cbcBoard.Board[m.A];
                Square B = game.cbcBoard.Board[m.B];

                if (A.Piece != null && A.Piece.TotallyValidMoves.Contains(B))
                {
                    game.txtTurn.Text = "Other Players Turn";
                    this.Player.Move(m);
                }

                return false;
            };
            this.Player.Moved += (p, m) => game.cbcBoard.InvokeIfRequired(() => { game.cbcBoard.Turn = false; game.cbcBoard.Board[m.A].To(game.cbcBoard.Board[m.B]); game.cbcBoard.Repaint(); });
            this.Player.PlayerColorChanged += (p, c) => game.cbcBoard.InvokeIfRequired(() => { game.cbcBoard.Player = c; game.cbcBoard.Repaint(); });
            this.Player.MyTurn += p => { game.cbcBoard.Turn = true; game.InvokeIfRequired(() => { game.txtTurn.Text = "Your Turn"; }); };
            game.Closed += (o, ea) => { this.Toggle(true); this.Activate(); };
            return game;
        }

        private void Toggle(bool state)
        {
            this.PlayerList.IsEnabled = state;
        }

        private void ToggleConnect(bool state)
        {
            this.btnConnect.Content = state ? "Connect" : "Disconnect";
            this.PlayerName.IsEnabled = state;
            this.Host.IsEnabled = state;
            this.Port.IsEnabled = state;
        }

        private void Connect(object sender, RoutedEventArgs e)
        {
            bool connected = true;
            this.PlayerList.ItemsSource = null;

            if (this.Player.Client == null)
            {
                try
                {
                    if (!this.Player.Connect(this.Host.Text, Convert.ToInt32(this.Port.Text)))
                    {
                        this.Log("Could not connect to server.");
                        connected = false;
                    }
                    else
                    {
                        this.Log("Connected to server.");
                        if (this.PlayerName.Text.Trim() != "") this.Player.Name = this.PlayerName.Text.Trim();
                    }
                }
                catch
                {
                    this.Log("An error came up when connecting to server.");
                    connected = false;
                }
            }
            else
            {
                this.Log("Disconnected from server.");
                this.Player.Disconnect();
                this.Player.Name = null;
                connected = false;
            }

            this.ToggleConnect(!connected);
        }

        private void RequestPlay(object sender, RoutedEventArgs e)
        {
            this.Player.Play((string)((Button)sender).Tag);
        }

        private void txtInput_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.Enter)
            {
                e.Handled = true;

                this.Player.SendChatMessage(this.txtInput.Text);
                this.txtInput.Text = "";
            }
        }
    }
}
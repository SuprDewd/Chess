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

            this.Board = new ChessGame();
            this.Player = new ChessClientPlayer(this.Board.cbcBoard);
            this.Board.Player = this.Player;
            this.Player.PlayerListUpdated += (p, l) =>
            {
                this.PlayerList.InvokeIfRequired(() =>
                {
                    this.PlayerList.ItemsSource = (from i in l
                                                   let split = ChessServer.GetClientParts(i)
                                                   select new { Name = split.Item3.Trim() != "" ? split.Item3 : split.Item1 + ":" + split.Item2, Ip = split.Item1 + ":" + split.Item2 }).ToArray();
                });
            };

            this.Player.InGameChanged += GameChanged;

            this.Player.PlayRequest = (p, m) =>
            {
                // TODO: Check if player accepts.
                return true;
            };

            this.Host.Text = Internet.LocalIPAddresses.FirstOrDefault(i => i.AddressFamily == System.Net.Sockets.AddressFamily.InterNetwork).ToString() ?? "";
            this.Port.Text = 1337.To(1350).FirstOrDefault(i => !Internet.IsPortFree(i)).ToString() ?? "";
        }

        private void GameChanged(ChessClientPlayer player, bool inGame)
        {
            if (inGame)
            {
                this.InvokeIfRequired(() =>
                    {
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

        private void Toggle(bool state)
        {
            this.btnConnect.IsEnabled = state;
            this.PlayerList.IsEnabled = state;
        }

        private void Connect(object sender, RoutedEventArgs e)
        {
            try
            {
                if (!this.Player.Connect(this.Host.Text, this.Port.Text.ToInt())) MessageBox.Show("Could not connect to server.", "Error");
            }
            catch
            {
                MessageBox.Show("An error came up when connecting to server.", "Error");
            }
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
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
using SharpBag;
using SharpBag.Logging;
using ChessLib.Server;
using System.Net;

namespace Chess
{
    /// <summary>
    /// Interaction logic for Server.xaml
    /// </summary>
    public partial class Server : Window
    {
        public ChessServer ChessServer { get; private set; }
        public Logger Logger { get; private set; }

        public Server()
        {
            InitializeComponent();

            this.Logger = new Logger(s => this.Log.InvokeIfRequired(() => { this.Log.Text += s + Environment.NewLine; this.Log.ScrollToEnd(); }));
            this.Port.Focus();
            this.cmbIPs.ItemsSource = (from ip in SharpBag.Net.Internet.LocalIPAddresses
                                       orderby ip.AddressFamily
                                       select ip.ToString()).Union(Enumerable.Repeat("127.0.0.1", 1));
            this.cmbIPs.SelectedIndex = 0;
        }

        private void Input_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.Enter && this.ChessServer != null)
            {
                e.Handled = true;

                this.ParseMessage(this.Input.Text.Trim().ToUpper());
                this.Input.Text = "";
            }
        }

        private string[] StopMessages = new string[] { "QUIT", "STOP", "END", "EXIT", "Q" };

        private void ParseMessage(string msg)
        {
            if (msg == "LISTPLAYERS" || msg == "PLAYERS")
            {
                this.Logger.Log("Players (" + this.ChessServer.Clients.Count + "):");
                foreach (ChessServerPlayer client in this.ChessServer.Clients)
                {
                    this.Logger.Log(client.Client.Client.Client.RemoteEndPoint.ToString());
                }
            }
            else if (msg == "LISTGAMES" || msg == "GAMES")
            {
                this.Logger.Log("Games (" + this.ChessServer.Games.Count + "):");
                foreach (ChessServerGame game in this.ChessServer.Games)
                {
                    this.Logger.Log(game.ToString());
                }
            }
            else if (this.StopMessages.Contains(msg))
            {
                this.Connect_Click(null, null);
            }
            else if (msg == "RESTART" || msg == "RESET")
            {
                this.Connect_Click(null, null);
                this.Connect_Click(null, null);
            }
        }

        private void Window_Closed(object sender, EventArgs e)
        {
            try
            {
                this.ChessServer.Dispose();
            }
            catch { }

            Environment.Exit(0);
        }

        private void ToggleConnect()
        {
            bool connected = this.ChessServer != null;

            this.Port.IsEnabled = !connected;
            this.Connect.Content = connected ? "Stop" : "Start";
            this.cmbIPs.IsEnabled = !connected;
        }

        private void Connect_Click(object sender, RoutedEventArgs e)
        {
            if (this.ChessServer == null)
            {
                try
                {
                    this.Logger.Log("Attempting to start a server.");
                    this.ChessServer = new ChessServer(IPAddress.Parse((string)this.cmbIPs.SelectedValue), Utils.Single(Convert.ToInt32(this.Port.Text)), this.Logger, true);
                }
                catch (Exception x)
                {
                    this.Logger.Log("Unable to start a server: " + x.Message);
                    this.ChessServer = null;
                }
            }
            else
            {
                this.Logger.Log("Stopping the server.");
                try
                {
                    this.ChessServer.Dispose();
                }
                catch { }

                this.ChessServer = null;
                this.Logger.Log("Server stopped.");
            }

            this.ToggleConnect();
        }
    }
}
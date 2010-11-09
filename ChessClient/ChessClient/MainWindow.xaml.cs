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
using System.Windows.Navigation;
using System.Windows.Shapes;
using SharpBag;
using SharpBag.Net;
using SharpBag.IO;
using ChessLib;
using System.Net.Sockets;

namespace ChessClient
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        TcpClientHandler Client;
        Chess ChessGame;

        public MainWindow()
        {
            InitializeComponent();

            this.Client = new TcpClientHandler(new TcpClient("10.220.238.59", 1337));
            this.Client.MessageReceived += (s, m) => { this.txtLog.Dispatcher.Invoke(new Action(() => { this.txtLog.Text += m; this.txtLog.Text += Environment.NewLine; Parse(m); })); };
            this.Client.Disconnected += (s) => { this.txtLog.Dispatcher.Invoke(new Action(() => { this.txtLog.Text += "Server disconnected."; this.txtLog.Text += Environment.NewLine; })); };
        }

        private void Parse(string m)
        {
            if (m.StartsWith("Welcome"))
            {
                this.ChessGame = new Chess();
                this.ChessGame.cbcBoard.Moved = (b, mo) => {
                    this.Client.SendMessage("Game Move " + mo.A.ToString() + " " + mo.B.ToString());
                    return false;
                };
                this.ChessGame.cbcBoard.Player = m.Split(' ')[1] == "White" ? ChessColor.White : ChessColor.Black;
                this.ChessGame.Show();
            }
            else if (m.StartsWith("Moved"))
            {
                string[] split = m.Split(' ');
                this.ChessGame.cbcBoard.Board[split[1]].To(this.ChessGame.cbcBoard.Board[split[2]]);
                this.ChessGame.cbcBoard.Repaint();
            }
            else if (m.StartsWith("GameOver"))
            {
                this.Client.SendMessage("Quit");
                this.Client = new TcpClientHandler(new TcpClient("10.220.238.59", 1337));
                MessageBox.Show(m);
            }
        }

        private void TextBox_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.Enter)
            {
                this.Client.SendMessage(this.txtMsg.Text);
                this.txtMsg.Text = "";
            }
        }

        private void Window_Closed(object sender, EventArgs e)
        {
            Environment.Exit(0);
        }
    }
}
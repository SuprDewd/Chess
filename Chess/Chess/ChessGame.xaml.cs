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
using ChessLib.Client;
using ChessLib.Enums;

namespace Chess
{
    /// <summary>
    /// Interaction logic for Chess.xaml
    /// </summary>
    public partial class ChessGame : Window
    {
        private ChessClientPlayer _Player = null;
        public ChessClientPlayer Player
        {
            get { return this._Player; }
            set
            {
                this._Player = value;
                this._Player.ClearGameOverEvent();
                this._Player.GameOver += GameOver;
                this._Player.ServerDisconnected += p => { this.InvokeIfRequired(() => { this.Hide(); this.cbcBoard.Board.Reset(); this.cbcBoard.Repaint(); }); };
                this._Player.ClearGameChatEvent();
                this._Player.GameChatMessageReceived += (p, m) => { this.txtChat.InvokeIfRequired(() => { this.txtChat.Text += m + Environment.NewLine; this.txtChat.ScrollToEnd(); }); };
            }
        }

        public ChessGame()
        {
            InitializeComponent();
        }

        private void GameOver(ChessClientPlayer player, ChessWinner r)
        {
            this.InvokeIfRequired(() =>
                {
                    if (r != (ChessWinner)0) MessageBox.Show((r == ChessWinner.StaleMate ? "Stalemate" : r.ToString() + " wins") + "!", "Game Over");
                    else MessageBox.Show("A player quit.");
                    this.Close();
                });
        }

        private void Wrapper_SizeChanged(object sender, SizeChangedEventArgs e)
        {
            this.cbcBoard.Size = Math.Min(this.BoardWrapper.ActualHeight, this.BoardWrapper.ActualWidth);
        }

        private void TextBox_KeyUp(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.Enter)
            {
                e.Handled = true;
                this.Player.SendGameChatMessage(this.txtInput.Text);
                this.txtInput.Text = "";
            }
        }

        private void Window_Closed(object sender, EventArgs e)
        {
            string[] hport = this.Player.Client.Client.Client.RemoteEndPoint.ToString().Split(':');
            this.Player.Disconnect();
            this.Player.Connect(hport[0], Convert.ToInt32(hport[1]));
        }
    }
}
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
            get { return this.Player; }
            set
            {
                this._Player = value;
                this._Player.GameOver += GameOver;
                this._Player.ServerDisconnected += p => { this.InvokeIfRequired(() => { this.Hide(); this.cbcBoard.Board.Reset(); }); };
            }
        }

        public ChessGame()
        {
            InitializeComponent();
        }

        private void GameOver(ChessClientPlayer player, ChessWinner r)
        {
            MessageBox.Show((r == ChessWinner.StaleMate ? "Stalemate" : r.ToString() + " wins") + "!", "Game Over");
            this.Hide();
            this.cbcBoard.Board.Reset();
            this.cbcBoard.Repaint();
        }

        private void Wrapper_SizeChanged(object sender, SizeChangedEventArgs e)
        {
            this.cbcBoard.Size = Math.Min(this.BoardWrapper.ActualHeight, this.BoardWrapper.ActualWidth);
        }
    }
}
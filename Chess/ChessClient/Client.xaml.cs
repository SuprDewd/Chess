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
            this.Player.PlayRequest = (p, m) =>
            {
                // TODO: Check if player accepts.
                return true;
            };
        }
    }
}
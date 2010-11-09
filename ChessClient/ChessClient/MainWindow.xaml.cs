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
using ChessLib.Client;
using ChessLib.Controls;
using ChessLib.Enums;
using System.Net.Sockets;

namespace ChessClient
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public Chess Board { get; private set; }
        public ChessClientPlayer Client { get; private set; }

        public MainWindow()
        {
            InitializeComponent();

            this.Board = new Chess();
            this.Client = new ChessClientPlayer(this.Board.cbcBoard);
            this.Client.PlayRequest = (p, m) =>
            {
                // TODO: Check if player accepts.
                return true;
            };
        }

        private void Window_Closed(object sender, EventArgs e)
        {
            Environment.Exit(0);
        }
    }
}
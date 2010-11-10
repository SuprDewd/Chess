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
using ChessLib.Pieces;
using ChessLib.Enums;
using System.Net.Sockets;

namespace Chess
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void OpenExplainer(object sender, RoutedEventArgs e)
        {
            this.Hide();
            new Explainer().ShowDialog();
            this.Show();
        }

        private void OpenLocal(object sender, RoutedEventArgs e)
        {
            this.Hide();
            new Local().ShowDialog();
            this.Show();
            this.Activate();
        }

        private void OpenClient(object sender, RoutedEventArgs e)
        {
            this.Hide();
            new Client().ShowDialog();
            this.Close();
        }

        private void OpenServer(object sender, RoutedEventArgs e)
        {
            this.Hide();
            new Server().ShowDialog();
            this.Close();
        }

        private void Window_Closed(object sender, EventArgs e)
        {
            Environment.Exit(0);
        }
    }
}
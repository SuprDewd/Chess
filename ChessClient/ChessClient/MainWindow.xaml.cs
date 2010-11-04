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
using System.IO;
using System.Net;
using System.Net.Sockets;

namespace ChessClient
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

        TcpClient client;
        NetworkStream ns;
        BinaryReader br;
        BinaryWriter bw;

        private void Connect(object sender, RoutedEventArgs e)
        {
            this.lstPlayers.ItemsSource = null;

            if (client != null)
            {
                bw.Write("q");
            }

            try
            {
                client = new TcpClient(this.txtIp.Text, Convert.ToInt32(this.txtPort.Text));
                ns = client.GetStream();
                br = new BinaryReader(ns);
                bw = new BinaryWriter(ns);

                bw.Write("ls");
                this.lstPlayers.ItemsSource = br.ReadString().Split(new char[] { '\n' }, StringSplitOptions.RemoveEmptyEntries);
            }
            catch { }
        }
    }
}
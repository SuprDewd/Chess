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
using System.Threading;
using ChessLib;

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
        Thread Listener;

        private void Connect(object sender, RoutedEventArgs e)
        {
            this.lstPlayers.ItemsSource = null;

            if (this.Listener != null)
            {
                this.Listener.Abort();
            }

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

                //bw.Write("ls");
                //this.lstPlayers.ItemsSource = br.ReadString().Split(new char[] { '\n' }, StringSplitOptions.RemoveEmptyEntries);

                this.Listener = new Thread(new ParameterizedThreadStart(Listen));
                this.Listener.Start(ns);
            }
            catch { MessageBox.Show("Couldn't connect.", "Error"); }
        }

        private void Listen(object o)
        {
            using (NetworkStream ns = (NetworkStream)o)
            {
                BinaryReader br = new BinaryReader(ns);
                BinaryWriter bw = new BinaryWriter(ns);

                while (Thread.CurrentThread.ThreadState == ThreadState.Running)
                {
                    if (!ns.DataAvailable) { Thread.Sleep(100); continue; }

                    string s = br.ReadString().Trim();

                    if (s.StartsWith("na "))
                    {
                        this.Dispatcher.BeginInvoke(new Action(() => { MessageBox.Show(s.Substring(3), "Error"); }));
                    }
                    else if (s.StartsWith("hi "))
                    {
                        Chess c = new Chess(s.Substring(3) == "w" ? ChessColor.White : ChessColor.Black);
                        c.ShowDialog();
                    }
                    else if (s.StartsWith("p "))
                    {
                        bw.Write("y");
                    }
                    else if (s.StartsWith("ls "))
                    {
                        this.lstPlayers.Dispatcher.BeginInvoke(new Action(() =>
                        {
                            this.lstPlayers.ItemsSource = s.Substring(3).Split(new char[] { '\n' }, StringSplitOptions.RemoveEmptyEntries).Select(i => i.Trim()).Where(i => i != this.client.Client.LocalEndPoint.ToString());
                        }
                        ));
                    }
                }
            }
        }

        private void PlayerClicked(dynamic sender, RoutedEventArgs e)
        {
            bw.Write("p " + sender.Content);
        }

        private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)
        {
            Environment.Exit(0);
        }
    }
}
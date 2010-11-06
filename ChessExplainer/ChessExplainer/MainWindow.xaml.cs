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
using WF = System.Windows.Forms;
using System.IO;
using ChessLib;
using System.Threading;

namespace ChessExplainer
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public string ImageDirectory { get { return System.IO.Path.Combine(Settings.ExecutableDirectory.ToString(), "Icons"); } }

        public MainWindow()
        {
            InitializeComponent();
            this.cbcBoard.ImageDirectory = this.ImageDirectory;
            this.UpdateMoves();

            this.cbcBoard.Board.GameEnded += (b, r) =>
                {
                    MessageBox.Show((r == ChessWinner.StaleMate? "Stalemate" : r.ToString() + " wins") + "!", "Game Over");
                };

            this.cbcBoard.Board.Promotion = b =>
                {
                    /*Promotion p = new Promotion();
                    p.ShowDialog();
                    return p.Choise;*/

                    return PromotionChoise.Queen;
                };

            this.cbcBoard.Board.NextTurn += b =>
                {
                    this.UpdateMoves();
                };
        }

        private void Grid_SizeChanged(object sender, SizeChangedEventArgs e)
        {
            this.cbcBoard.Size = Math.Min(this.MainGrid.ActualHeight, this.MainGrid.ActualWidth - 150);
        }

        private void Moves_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (this._UpdatingMoves) return;
            this.Focus();

            this.cbcBoard.Board.CurrentHistory = this.Moves.SelectedIndex;
            this.cbcBoard.Repaint();
        }

        private bool _UpdatingMoves = false;

        private void UpdateMoves()
        {
            this._UpdatingMoves = true;

            int i = 1;
            this.Moves.ItemsSource = Enumerable.Repeat("Start", 1).Union(
                         from m in this.cbcBoard.Board.History
                         select (i++) + ". " + m.A + " -> " + m.B
                );

            this.Moves.SelectedIndex = this.cbcBoard.Board.CurrentHistory;

            this._UpdatingMoves = false;
        }

        private void Window_KeyDown(object sender, KeyEventArgs e)
        {
            if ((e.Key == Key.Down || e.Key == Key.Right) && this.Moves.SelectedIndex + 1 != this.Moves.Items.Count)
            {
                this.Moves.SelectedIndex++;
            }
            else if ((e.Key == Key.Up || e.Key == Key.Left) && this.Moves.SelectedIndex != 0)
            {
                this.Moves.SelectedIndex--;
            }
        }

        private void Reset(object sender, RoutedEventArgs e)
        {
            this.cbcBoard.Board.Reset(true);
            this.cbcBoard.Repaint();
        }

        private void Exit(object sender, RoutedEventArgs e)
        {
            Environment.Exit(0);
        }

        private string _LastSelectedFile = null;

        private void Import(object sender, RoutedEventArgs e)
        {
            try
            {
                WF.OpenFileDialog ofDlg = new WF.OpenFileDialog();
                ofDlg.FileName = this._LastSelectedFile;

                if (ofDlg.ShowDialog() == WF.DialogResult.OK)
                {
                    this._LastSelectedFile = ofDlg.FileName;

                    StringBuilder sb = new StringBuilder();
                    using (StreamReader sr = new StreamReader(this._LastSelectedFile))
                    {
                        string line;

                        while ((line = sr.ReadLine()) != null)
                        {
                            sb.AppendLine(line);
                        }
                    }

                    this.cbcBoard.Board.Reset(true);
                    if (!this.cbcBoard.Board.Import(sb.ToString())) { MessageBox.Show("Not all moves could be imported.", "Warning"); }
                    this.cbcBoard.Repaint();
                }
            }
            catch
            {
                MessageBox.Show("Couldn't import game.", "Error");   
            }
        }

        private void Export(object sender, RoutedEventArgs e)
        {
            try
            {
                WF.SaveFileDialog sfDlg = new WF.SaveFileDialog();
                sfDlg.FileName = this._LastSelectedFile;

                if (sfDlg.ShowDialog() == WF.DialogResult.OK)
                {
                    this._LastSelectedFile = sfDlg.FileName;

                    using (StreamWriter sw = new StreamWriter(this._LastSelectedFile, false))
                    {
                        foreach (Move m in this.cbcBoard.Board.History)
                        {
                            sw.WriteLine(m.ToString());
                        }
                    }
                }
            }
            catch
            {
                MessageBox.Show("Couldn't export game.", "Error");
            }
        }
    }
}
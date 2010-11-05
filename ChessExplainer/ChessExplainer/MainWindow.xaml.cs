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

namespace ChessExplainer
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            this.UpdateMoves();

            this.cbcBoard.Board.GameEnded += (b, r) =>
                {
                    MessageBox.Show(r.ToString());
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
    }
}
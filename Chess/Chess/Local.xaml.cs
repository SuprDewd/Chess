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
using ChessLib.Enums;
using SharpBag;
using System.Windows.Threading;

namespace Chess
{
    /// <summary>
    /// Interaction logic for Local.xaml
    /// </summary>
    public partial class Local : Window
    {
        public Local()
        {
            InitializeComponent();

            this.cbcBoard.Board.GameEnded += (b, r) =>
            {
                MessageBox.Show((r == ChessWinner.StaleMate ? "Stalemate" : r.ToString() + " wins") + "!", "Game Over");
            };

            this.cbcBoard.Board.NextTurn += b =>
                {
                    this.cbcBoard.Repaint();

                    if (this.TurnEffect.IsChecked)
                    {
                        IEnumerable<int> turn = b.Turn == ChessColor.White ? 180.To(360, 10) : 0.To(180, 10);

                        foreach (int i in turn)
                        {
                            this.cbcBoard.LayoutTransform = new RotateTransform((double)i);

                            for (int rank = 0; rank < 8; rank++)
                            {
                                for (int file = 0; file < 8; file++)
                                {
                                    if (this.cbcBoard.Squares[rank, file].Square.Piece != null)
                                    {
                                        Image img = (Image)(this.cbcBoard.Squares[rank, file].Children.Count == 1 ? this.cbcBoard.Squares[rank, file].Children[0] : this.cbcBoard.Squares[rank, file].Children[1]); //.LayoutTransform = new RotateTransform((double)i);
                                        img.LayoutTransform = new RotateTransform((double)(360 - i) + (b.Turn == ChessColor.Black ? 0 : 180));
                                    }
                                }
                            }

                            this.cbcBoard.Dispatcher.Invoke(DispatcherPriority.Render, new Action(() => { }));
                            System.Threading.Thread.Sleep(20);
                        }
                    }

                    this.cbcBoard.Player = b.Turn;
                };
        }

        private void Exit(object sender, RoutedEventArgs e)
        {
            this.Close();
        }

        private void Reset(object sender, RoutedEventArgs e)
        {
            this.cbcBoard.Board.Reset();
            this.cbcBoard.Repaint();
        }

        private void Grid_SizeChanged(object sender, SizeChangedEventArgs e)
        {
            this.cbcBoard.Size = Math.Min(this.Wrapper.ActualHeight - 26, this.Wrapper.ActualWidth);
        }
    }
}

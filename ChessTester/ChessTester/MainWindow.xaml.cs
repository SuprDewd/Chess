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
using ChessLib;

namespace ChessTester
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

        public Canvas[,] canvases;
        public ChessBoard Board;

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            this.Board = new ChessBoard();

            this.canvases = new Canvas[,]
            {
                {A1, B1, C1, D1, E1, F1, G1, H1},
                {A2, B2, C2, D2, E2, F2, G2, H2},
                {A3, B3, C3, D3, E3, F3, G3, H3},
                {A4, B4, C4, D4, E4, F4, G4, H4},
                {A5, B5, C5, D5, E5, F5, G5, H5},
                {A6, B6, C6, D6, E6, F6, G6, H6},
                {A7, B7, C7, D7, E7, F7, G7, H7},
                {A8, B8, C8, D8, E8, F8, G8, H8},
            };

            this.Reset();
        }

        private void Reset()
        {
            bool blackKingChecked = false;
            bool blackKingCheckeMated = false;
            bool whiteKingChecked = false;
            bool whiteKingCheckeMated = false;

            for (int x = 0; x < 8; x++)
            {
                for (int y = 0; y < 8; y++)
                {
                    Square t = this.Board[x + 1, y + 1];
                    Canvas c = this.canvases[t.Location.Rank - 1, Location.ConvertFile(t.Location.File) - 1];

                    if (t.Piece != null && t.Piece.GetType() == typeof(King))
                    {
                        King k = (King)t.Piece;

                        if (k.Color == ChessColor.White)
                        {
                            whiteKingChecked = k.Checked;
                            whiteKingCheckeMated = k.CheckMated;
                        }
                        else
                        {
                            blackKingChecked = k.Checked;
                            blackKingCheckeMated = k.CheckMated;
                        }
                    }

                    c.Background = t.Color == ChessColor.White ? Brushes.Black : Brushes.White;
                    c.Children.Clear();
                    c.Children.Add(new Label() { Height = 80, VerticalAlignment = System.Windows.VerticalAlignment.Stretch, HorizontalAlignment = System.Windows.HorizontalAlignment.Stretch, Content = (t.ToString()) + (t.Piece != null ? ": " + t.Piece.ToString() : ""), Foreground = Brushes.Red, Background = t.Piece == null ? null : new ImageBrush() { ImageSource = new BitmapImage(new Uri(@"C:\Users\SuprDewd\Desktop\Projects\TSkoli\FOR403\Chess\Icons\" + t.Piece.PieceNameShort + ".ico")), Stretch = Stretch.Fill } });
                }
            }

            txtStatus.Text = "Black King Checked:    " + (blackKingChecked ? "yes" : "no") +     Environment.NewLine +
                             "Black King CheckMated: " + (blackKingCheckeMated ? "yes" : "no") + Environment.NewLine +
                             "White King Checked:    " + (whiteKingChecked ? "yes" : "no") +     Environment.NewLine +
                             "White King CheckMated: " + (whiteKingCheckeMated ? "yes" : "no"); 
        }

        private Square LastTileClicked = null;

        private void TileClicked(object sender, RoutedEventArgs e)
        {
            if (this.LastTileClicked == null)
            {
                Canvas c = (Canvas)sender;
                this.LastTileClicked = this.Board[c.Name];

                if (this.LastTileClicked.Piece == null || this.LastTileClicked.Piece.Color != this.Board.Turn)
                {
                    this.LastTileClicked = null;
                    return;
                }

                c.Background = Brushes.Pink;

                foreach (Square t in this.LastTileClicked.Piece.ValidMoves)
                {
                    this.canvases[t.Location.Rank - 1, Location.ConvertFile(t.Location.File) - 1].Background = Brushes.Green;
                }
            }
            else
            {
                Square tileClicked = this.Board[((Canvas)sender).Name];

                if (this.LastTileClicked != tileClicked && !this.LastTileClicked.To(tileClicked))
                {
                    MessageBox.Show("Invalid move.");
                }

                this.Reset();
                this.LastTileClicked = null;
            }
        }
    }
}
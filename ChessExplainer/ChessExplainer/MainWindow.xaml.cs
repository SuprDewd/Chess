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

            this.cbcBoard.Board.GameEnded += (b, r) =>
                {
                    MessageBox.Show(r.ToString());
                };
        }

        private void Grid_SizeChanged(object sender, SizeChangedEventArgs e)
        {
            this.cbcBoard.Size = Math.Min(this.MainGrid.ActualHeight, this.MainGrid.ActualWidth - 150);
        }
    }
}

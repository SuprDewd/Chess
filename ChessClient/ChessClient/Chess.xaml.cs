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

namespace ChessClient
{
    /// <summary>
    /// Interaction logic for Chess.xaml
    /// </summary>
    public partial class Chess : Window
    {
        public Chess()
        {
            InitializeComponent();
        }

        private void Grid_SizeChanged(object sender, SizeChangedEventArgs e)
        {
            this.cbcBoard.Size = Math.Min(this.ActualHeight, this.ActualWidth);
        }
    }
}
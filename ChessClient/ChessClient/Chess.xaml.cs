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
using SharpBag;

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

            this.cbcBoard.Turn = false;
            this.cbcBoard.ImageDirectory = System.IO.Path.Combine(Settings.ExecutableDirectory.ToString(), "Icons");
        }

        private void Wrapper_SizeChanged(object sender, SizeChangedEventArgs e)
        {
            this.cbcBoard.Size = Math.Min(this.BoardWrapper.ActualHeight, this.BoardWrapper.ActualWidth);
        }
    }
}
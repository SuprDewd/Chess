﻿using System;
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

namespace Chess
{
    /// <summary>
    /// Interaction logic for Chess.xaml
    /// </summary>
    public partial class ChessGame : Window
    {
        public ChessGame()
        {
            InitializeComponent();

            this.cbcBoard.Turn = false;
        }

        private void Wrapper_SizeChanged(object sender, SizeChangedEventArgs e)
        {
            this.cbcBoard.Size = Math.Min(this.BoardWrapper.ActualHeight, this.BoardWrapper.ActualWidth);
        }
    }
}
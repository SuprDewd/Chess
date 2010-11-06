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
using ChessLib;

namespace ChessExplainer
{
    /// <summary>
    /// Interaction logic for Promotion.xaml
    /// </summary>
    public partial class Promotion : Window
    {
        public Promotion()
        {
            InitializeComponent();
        }

        public PromotionChoise Choise = 0;

        private void Clicked(object sender, RoutedEventArgs e)
        {
            string n = ((Button)sender).Content.ToString();
            this.Choise = n == "Knight" ? PromotionChoise.Knight :
                n == "Rook" ? PromotionChoise.Rook :
                n == "Bishop" ? PromotionChoise.Bishop :
                PromotionChoise.Queen;

            this.Close();
        }

        private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)
        {
            if (this.Choise == 0)
            {
                this.Choise = PromotionChoise.Queen;
            }
        }
    }
}
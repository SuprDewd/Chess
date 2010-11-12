using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ChessLib;
using ChessLib.Enums;

namespace ConsoleChess
{
    class Program
    {
        static ChessBoard Board;

        static void Main(string[] args)
        {
            Board = new ChessBoard();
            Board.GameEnded += (b, w) => { Winner = w; };

            while (!Board.GameOver)
            {
                Draw();
                Console.SetCursorPosition(40, 22);
                Console.Write("From: ");
                string from = Console.ReadLine();
                Console.SetCursorPosition(40, 23);
                Console.Write("To:   ");
                string to = Console.ReadLine();

                Console.SetCursorPosition(40, 21);

                try
                {
                    if (!Board[from].To(Board[to]))
                    {
                        Console.Write("Invalid move.");
                        Console.ReadLine();
                    }
                }
                catch { Console.Write("Invalid move."); Console.ReadLine(); }
            }

            Draw();
            Console.SetCursorPosition(40, 22);
            Console.Write("Game Over: ");
            Console.Write((Winner == ChessWinner.StaleMate ? "Stalemate" : Winner.ToString() + " won") + "!");
            Console.ReadLine();
        }

        static ChessWinner Winner;              

        static void Draw()
        {
            Console.Clear();

            foreach (Square s in Board)
            {
                Console.BackgroundColor = s.Color == ChessLib.Enums.ChessColor.White ? ConsoleColor.Gray : ConsoleColor.DarkGreen;
                Console.ForegroundColor = s.Piece != null && s.Piece.Color == ChessLib.Enums.ChessColor.Black ? ConsoleColor.Black : ConsoleColor.White;

                int file = (Location.ConvertFile(s.Location.File) - 1) * 3;
                int rank = (8 - s.Location.Rank) * 3;

                for (int i = 0; i < 9; i++)
                {
                    int nFile = file + i;
                    int nRank = rank;

                    while (nFile - file >= 3)
                    {
                        nRank++;
                        nFile -= 3;
                    }

                    Console.SetCursorPosition(nFile, nRank);

                    if (i == 4 && s.Piece != null)
                    {
                        char p = ' ';

                        switch (s.Piece.PieceName)
                        {
                            case "King": p = 'K'; break;
                            case "Pawn": p = 'P'; break;
                            case "Knight": p = 'S'; break;
                            case "Queen": p = 'Q'; break;
                            case "Rook": p = 'R'; break;
                            case "Bishop": p = 'B'; break;
                        }

                        Console.Write(p);
                    }
                    else
                    {
                        Console.Write(' ');
                    }
                }
            }

            Console.BackgroundColor = ConsoleColor.Black;
            Console.ForegroundColor = ConsoleColor.White;
        }
    }
}
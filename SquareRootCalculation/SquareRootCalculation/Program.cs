using System;

namespace SquareRootCalculation
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter an integer value:");
            var integerValue = Convert.ToInt32(Console.ReadLine());
            
            double root = 1;
            var i = 0;
            
            while (true)
            {
                i += 1;
                root = (integerValue / root + root) / 2;
                if (i == integerValue + 1)
                {
                    break;
                }
            }
            
            Console.WriteLine("Square root is equal to:{0}",root);
            
            Console.WriteLine("Press any key to enter ...");
            
            Console.ReadLine();
        }
    }
}

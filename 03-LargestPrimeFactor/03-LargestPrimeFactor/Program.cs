using System;

namespace _03_LargestPrimeFactor
{
    class Program
    {
        /* Challenge:
         * The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143?*/

        /*Explanation: Rather than using exhaustive methods to find prime factors, I have changed my strategy. We exhaustively 
         * find the first prime factor of the number (usually a low number), divide our big number by that prime factor, and start over. 
         * This drastically reduces the number of computations the computer has to do. In fact, this makes it possible at all to find the 
         * GPF of this particular big number.*/
        public static long[] longArrayAppend(Array array, long value)
        {
            long[] newArray = new long[array.Length + 1];
            array.CopyTo(newArray, 0);
            newArray.SetValue(value, newArray.Length - 1);
            return newArray;
        }
        public static void Main(string[] args)
        {
            Console.WriteLine("Enter a number and receive its greatest prime factor:");
            while (true)
            {
                long bigNum = long.Parse(Console.ReadLine());
                long dividend;
                long[] primeFactors = new long[0];
                dividend = bigNum;

                for (long i = 2; i <= dividend; i++)
                {
                    if (i > 1 && dividend % i == 0)
                    {
                        bool isPrime = true;
                        for (long j = 2; j < i; j++)
                        {
                            if (i % j == 0)
                            {
                                isPrime = false;
                            }
                        }
                        if (isPrime)
                        {
                            Console.WriteLine("---------------------------------");
                            Console.WriteLine("Found a prime factor: " + i.ToString());
                            Console.WriteLine("---------------------------------");
                            primeFactors = longArrayAppend(primeFactors, i);
                            if (dividend != i)
                            {
                                dividend = dividend / i;
                                i = 2;
                            }

                        }
                    }
                }
                Console.WriteLine("------------------------------------------");

                Console.WriteLine("GPF: " + primeFactors[primeFactors.Length - 1]);

                Console.WriteLine("Try Another: ");
            }
            

        }
    }
}

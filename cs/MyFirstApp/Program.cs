// Program.cs
using System;
using Vehicles;

namespace LearnCsharp
{
    class Program
    {
        public static void Main()
        {
            Car Mycar = new Car();
            Mycar.Make = "Toyota";
            Mycar.Model = 021;
            Mycar.Year = 2025;

            Mycar.Drive();
        }
    }
}
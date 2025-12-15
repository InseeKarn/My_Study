// car.cs

using System;



namespace Vehicles
{
    public class Car
    {
        // Fields (data members)
        public string Make;
        public int Model;
        public int Year;

        // Method (behavior)
        public void Drive()
        {
            Console.WriteLine($"The {Year} {Make} {Model} is driving.");
        }
    }
}
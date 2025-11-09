using System;

public static class Calculator
{
    static void Main()
    {

        string data = "";
        Console.WriteLine("Enter Number and OP for cal: ");
        data = Console.ReadLine();

        char[] OP = { '+', '-', 'x', '/' };
        
        string[] splitData = data.Split(OP);

        double[] Numbers = new double[splitData.Length];

        for (int i = 0; i < splitData.Length; i++)
        {
            if (double.TryParse(splitData[i], out double result))
            {
                Numbers[i] = result;
            }
            else
            {
                Console.WriteLine($"Invalid number: {splitData[i]}");
                return;
            }
        }
        foreach (double num in Numbers)
        {
            Console.WriteLine(num);
        }
    }
}


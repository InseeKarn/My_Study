def Even():
    for i in range(1, 21):
            if i % 2 == 0:
                print(i)

def Odd():
    for i in range(1, 21):
            if i % 2 != 0:
                print(i)

def Loop_Condition():
    for i in range(1, 51):
         if i % 3 == 0:
              print(i)
        
def Break_Continue():
    for i in range(1, 11):
        num = int(input("Num 1 - 10: "))
        if i == num:
            print("You Won!!")
            break
        if num < 3:
            continue
        print(i)


def While_For_List():
    numbers = []
    while len(numbers) < 5:
        n = int(input("Enter a number: "))
        numbers.append(n)


    for num in numbers:
        if num > 10:
            print(f"{num}")

    print(f"Sum of numbers[] = {sum(numbers)}")
        
def Prime_Number():
    import math
    for i in range(2, 100):
        flag = True
        for j in range(2, round(math.sqrt(i) + 1)):
            if i % j == 0:
                flag = False
                break
        if flag == True:
            print(i)
    

def Arr():
    arr = []
    for i in range(0, 5):
        n = int(input("Enter num: "))
        arr.append(n)
    
    print(f"Max = {max(arr)}\nMin = {min(arr)}")

    print(f"Avg = {sum(arr) / len(arr)}")

    print(f"Sorted = {sorted(arr)}")

Arr()
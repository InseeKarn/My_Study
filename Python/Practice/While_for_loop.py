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
     


# Even()
# print("Even func successed")
# Odd()
# print("Odd func is successed")
# Loop_Condition()
# print("Loop_Condition func is successed")
# Break_Continue()
# print("Break_Continue() func is successed")
# While_For_List()
# print("While_For_List() func is successed")

import random

a = random.randint(1, 100)
g = 0

while g != a:
    g = int(input("Guess number between 1 to 100: "))
    if g > 10 or g < 1:
        print("You should guess 1-100")
    elif g > a:
        print("Too high")
    else:
        print("Too low")
    if g == a:
        print(f"You're right your guess is {g} and answer is {a}")
        break

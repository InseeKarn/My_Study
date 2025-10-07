#include <stdio.h>
#include <math.h>

int main(){

    int num1;
    do{
        printf("Play game => please enter Even number (more than 3)\n");
        printf("Exit game => please enter 0\nEnter Number:");
        
        if (scanf("%d", &num1) == 0){
            break;
        }
    }while (num1 % 2 != 0 || num1 <= 3);

    if (num1 == 0){
        printf("See you next time!");
    }

    return 0;
}
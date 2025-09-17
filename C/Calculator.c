#include <stdio.h>
#include <math.h>

void Calculator(int a,int b, char op){
    
    
    switch(op){
        case '+':
            printf("%d + %d = %d",a,b, a+b);
            break;
        case '-':
            printf("%d - %d = %d",a,b, a-b);
            break;
        case '*':
            printf("%d * %d = %d",a,b, a*b);
            break;
        case '/':
            if(b!=0){
                printf("%d / %d = %d",a,b, a/b);
            }
            else{
                printf("Error: Division by zero");
            }
            break;
        case 's':
            if(a>=0){
                printf("sqrt(%d) = %.2f",a, sqrt(a));
            }
            else{
                printf("Error: Square root of negative number");
            }
            break;
        case '^':
            printf("%d ^ %d = %.2f",a,b , pow(a, b));
            break;
        default:
            printf("Error: Invalid operator");
            break;
    }
}

int main(){
    int a,b;
    char op;
    printf("Enter 1st number: ");
    scanf("%d", &a);
    printf("Enter an operator (+, -, *, /, ^, s): ");
    scanf(" %c", &op);
    if(op!='s'){
        printf("Enter 2nd number: ");
        scanf("%d", &b);
    }
    Calculator(a,b,op);

    return 0;
}
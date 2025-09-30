#include <stdio.h>
#include <stdbool.h>
#include <math.h>



void Prime_Number(){
    for(int i = 2 ; i <= 100; i++){
        bool flag = true;
        for(int j = 2; j <= sqrt(i) ; j++){
            if(i % j == 0){
                flag = false;
                break;
            }
        }
        if(flag == true)
            printf("%d ", i);
    }
}

void Arr(){

    int a[5];
    int max,min,total=0;
    for(int i = 0; i < 5;i++){
        printf("Enter num: ");
        scanf("%d", &a[i]);
    }

    max = min = a[0];

    for (int j = 0;j < 5;j++){
        if(a[j] > max) max = a[j];
        if(a[j] < min) min = a[j];
        total += a[j];
    }

    printf("Max = %d\n", max);
    printf("Min = %d\n", min);
    printf("total = %d\n", total);

}

int main(){
    
    Arr();

    return 0;
}
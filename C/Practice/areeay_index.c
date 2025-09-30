#include <stdio.h>

int main() {
    int xp[200], a = 0,i=0 ,j=0;

    for(i;i < 200;i++){
        xp[a++] = i;
        for(j;j < i;j++)
            printf("%d ", xp[j]);}


    return 0;
}

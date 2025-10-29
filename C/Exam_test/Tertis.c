#include <stdio.h>

int main() {
    int n;
    printf("Enter n= ");
    scanf("%d", &n);

    // พิมพ์ส่วนบน
    for (int i = 1; i <= n; i++) {
        // เว้นช่องว่างด้านหน้า (ให้เรียงกันสวย)
        for (int j = 0; j < n-1; j++) {
            printf(" ");
        }

        // พิมพ์เครื่องหมาย |
        printf("|");

        // พิมพ์เครื่องหมาย )
        for (int k = 1; k <= i; k++) {
            printf(")");
        }

        printf("\n");
    }

    // พิมพ์ส่วนล่าง
    printf("\\");
    for (int i = 0; i < n; i++) {
        printf("-");
    }
    printf("/\n");

    return 0;
}

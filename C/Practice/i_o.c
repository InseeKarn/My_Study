#include <stdio.h>

int main(){
    FILE *fp;
    int score[3][3],avg,sum=0;
    char name[3][20];
    int rows = sizeof(score) / sizeof(score[0]);       
    int cols = sizeof(score[0]) / sizeof(score[0][0]);
    fp = fopen("../scores.txt", "r");
    for(int i = 0;i < 3;i++){
        fscanf(fp, "%s", &name[i]);
        for(int j = 0;j < 3;j++){
            fscanf(fp, "%d", &score[i][j]);
        }
    }
    fclose(fp);
    printf("Score table:\n");
    for(int x = 0;x < rows;x++){
        printf("%s: ", name[x]);
        for(int y = 0;y < cols;y++)
            printf("%d ", score[x][y]);
        printf("\n");
    }
        
    return 0;
}
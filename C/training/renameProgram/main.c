#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <dirent.h>
#include <ctype.h>

int main()
{
    FILE *fin = fopen("test/1.txt", "r");
    FILE *fout = fopen("test/1out.txt", "w");

    if(!fin || !fout){
        printf("cannot open file");
        return 1;
    }

    char word[255];
    while (fscanf(fin, "%255s", word) == 1){
        for(int i = 0; word[i]; i++){
            if(isalpha(word[i]))
                fprintf(fout, "%c", word[i]);
            else
                fprintf(fout, "%c", word[i]);
        }
        fprintf(fout, " ");
        
    }

    fclose(fin);
    fclose(fout);


    
    return 0;
}
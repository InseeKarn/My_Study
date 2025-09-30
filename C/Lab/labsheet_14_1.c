#include <stdio.h>
#include <string.h>
#include <ctype.h>

void Acronym(char *s);

int main(){
    char uname[30];
    fgets(uname, sizeof(uname), stdin);

    Acronym(uname);

    return 0;
}

void Acronym (char *s){
    int newWord;

    for(int i = 0;i < strlen(s);i++){
        if(isspace((unsigned char)s[i])){
            newWord = 1;
        }
        else if (newWord){
            printf("%c",toupper((unsigned char)s[i]));
            newWord = 0;
        }
    }
    

}
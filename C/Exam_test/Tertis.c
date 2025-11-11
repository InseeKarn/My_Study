#include <stdio.h>
#include <string.h>

typedef struct {
    int Model;
    char ip;
} car;

int lengthOfLongestSubstring(char* s) {
    int count = 1, i = 0;
    while (i < strlen(s)){
        if (s[i] != s[i+1]) {
            count++;
            if (s[i] = strlen(s) - i){
                break;
            }
        }

        i++;
    }

    return count;
}

int  main() {

    char s[50] = "abcabcbb";
    int count = lengthOfLongestSubstring(s);
    printf("%d", count);

}
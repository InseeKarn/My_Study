#include <stdio.h>
#include <stdlib.h>

typedef struct{
    char Codes[11];
    char Name[50];
    char NickName[10];
    char Sex;
    int Age;

} Friend;


int main(){
    Friend F1 = {"6820501731", "Karnphong", "Insee", 'M', 18};
    Friend FriendList[5] = {0};
    FriendList[4] = F1;
    printf("%s\n", F1.Codes);
    printf("%s\n", F1.Name);
    printf("%s\n", F1.NickName);
    printf("%c\n", F1.Sex);
    printf("%d\n", F1.Age);

    int sum = 0;
    for(int i = 0;i < 5;i++)
        sum += FriendList[i].Age;
    printf("%.2f ", (float)sum / 5.0);
    return 0;
}
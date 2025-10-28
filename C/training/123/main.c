#include <stdio.h>
#include <string.h>

struct Customer {
    char name[50];
    char phone[20];
    float totalSpent;
};
struct Customer p[100];

int AddCustomer(int count){
    puts("Enter your name");
    scanf("%s", &p[count].name);
    puts("Enter your phone number");
    scanf("%s", &p[count].phone);
    puts("Enter your totalspent");
    scanf("%f", &p[count].totalSpent);
    count++;
    return count;
}

void ShowCustomers(int count){
    for (int i = 0; i < count ; i++){
        printf("Customer %d",i+1);
        printf("\n\tName: %s\n\tPhone: %s\n\tTotalspent: %f",p[i].name,p[i].phone,p[i].totalSpent);
    }
}

void FindFormName(count){
    char name1[50];
    scanf("%s", name1);
    for (int i = 0;i < count;i++){
        if (strcmp(name1, p[i].name) == 0){
            printf("\n\tName: %s\n\tPhone: %s\n\tTotalspent: %f",p[i].name,p[i].phone,p[i].totalSpent);
            break;
        }
    }
}

int main(){
    int count = 0;
    int n = 0;
    do {
        puts("1 for Add new customer\n2 for Show list customers\n3 for Find customer form name\n4 for Exit program");
        puts("Enter number 1-4");
        scanf("%d", &n);

        switch (n) {
            case 1:
                AddCustomer(count);
                count = count;
                break;
            case 2:
                ShowCustomers(count);
                break;
            case 4:
                printf("See ya again\n");
                break;
            default:
                printf("Invalid choice!\n");
        }


    }while (n != 4);


    
    return 0;
}
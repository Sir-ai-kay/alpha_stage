#include <stdio.h>
#include <maths.h>

int main(){
	int a;
	int b;

	printf("\nEnter the first number: ");
	scanf("%lf", &a);

	
	printf("\nEnter the next number: ");
	scanf("%lf", &b);

	mult(a,b);
	return 0;
}

int mult(a,b){

    if (a>=10 || b>=10){

        printf("\nIt's too hard");

    } else{

        c = a*b;

        return (c);

      }

}
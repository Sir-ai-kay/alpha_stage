#include <stdio.h>
#include <maths.h>

int main(){
	int a;
	int b;
	char c;

	printf("\nEnter a number: ");
	scanf("%lf", &a);

	
	printf("\nEnter another number: ");
	scanf("%lf", &b);

	printf("\nEnter operation: ");
	scanf("%c", &c);
	
	if(c == '+'){
	fs = a + b;
	printf("The sum of the numbers is %lf", fs);
	}else if(c == '-'){
	fs = a - b;
	printf("The difference is %lf", fs);
	}else if(c == '/'){
	fs = a / b;
	printf("The quotent is %lf", fs);
	}else if(c == '*'){
	fs = a * b;
	printf("The product is %lf", fs);
	}else if(c == '%'){
	fs = a % b;
	printf("The module is %lf ", fs);
	}
	return 0;
}


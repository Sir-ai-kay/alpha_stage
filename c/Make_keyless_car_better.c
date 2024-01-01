#include <stdio.h>
#include <maths.h>

int main(){
	int age;

	printf("How old are you?");
	scanf("%d", &age);	

	if(age < 18){
		printf("Sorry, you are too young to drive this car. Powering off");

	}else if (age > 18) {

	printf("Powering On. Enjoy the ride!");

	} else if (Number(age) === 18) {

	printf("Congratulations on your first year of driving. Enjoy the ride!");

}

	return 0;
}
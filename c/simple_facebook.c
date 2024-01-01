#include <stdio.h>
#include <stdlib.h>

int main(){
	char user[];
	char pass[];

	struct database ={

      		username: "David",

        	password: "234pg"

    };	


	struct newsfeed = [

    {

        username:"Bobby",

        timeline:"So tired of sheeeeeeet!"

    },

    {

        username:"Sally",

        timeline:"Java my lova"

    },

    {

        username:"Dada",

        timeline:"Da craze is da game coding."

    }

    ];

	
	printf("\nEnter your username: ");
	scanf("%s", user);

	printf("\nEnter your password: ");
	scanf("%s", pass);

	signIn(username,password);
}

void signIn(user,pass){
	if(user == database[0].username && pass == database[0].password){

        printf(newsfeed);

    }else{

        printf("Sorry! Wrong username or password.");

    }
}
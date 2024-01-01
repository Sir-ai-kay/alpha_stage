var database = [

    {

      username: "David",

        password: "234pg"

    },
    {

      username: "Sally",

        password: "123"

    },
    {

      username: "ingrid",

        password: "777"

    }


];

var newsfeed = [

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


function isValid(username, password){
	for (var i=0; i<database.length; i++){
		if(database[i].username === username && database[i].password === password){

        return true;

    		}
	}
	return false;	
}



function signIn(username,password){
	if (isValid(username, password)){
		console.log(newsfeed);
	}else{

        	alert("Sorry! Wrong username or password");

	    }		
}
var usernamePrompt = prompt("Enter your username: ");

var passwordPrompt = prompt("Enter your password: ");

signIn(usernamePrompt,passwordPrompt);
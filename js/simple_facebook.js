var database = [

    {

      username: "David",

        password: "234pg"

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
var usernamePrompt = prompt("Enter your username: ");

var passwordPrompt = prompt("Enter your password: ");

function signIn(user,pass){
    if(user === database[0].username && pass === database[0].password){

        console.log(newsfeed);

    }else{

        prompt("Sorry! Wrong username or password.");

    }

};

signIn(usernamePrompt,passwordPrompt);
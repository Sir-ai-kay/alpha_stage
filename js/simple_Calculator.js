//JAVASCRIPT /ECMASCRIPT



var f = prompt("Enter a number");

var s = prompt("Enter another number");

var opera = prompt("Enter operation");

var fs = Number(f) + Number(s);

var ft = Number(f) - Number(s);

var fu = Number(f) / Number(s);

var fv = Number(f) * Number(s);

var fw = Number(f) % Number(s);


if(opera === '+'){

    alert("The sum of the numbers is " + fs);

}else if(opera === '-'){

    alert("The difference of the numbers is " + ft);

}else if(opera === '/'){

    alert("The quotent of the numbers is " + fu);

}else if(opera === '*'){

    alert("The product of the numbers is " + fv);

}else if(opera === '%'){

    alert("The module of is " + fw);

};

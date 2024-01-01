function arith(a = prompt("enter number"),b = prompt("enter another number"),c = prompt("enter operation")) {
    if (c === '+') {
    return alert(Number(a) + Number(b))    
        
    }else if (c === '-') {
    return alert(Number(a) - Number(b))    
        
    }else if (c === '*') {
    return alert(Number(a) * Number(b))
        
    }else if (c === '/') {
    return alert(Number(a) / Number(b))
        
    }else if (c === '%') {
    return alert(Number(a) % Number(b))
        
    }else{
        alert ("Entered wrong operation!")
    }
    arith();
    
    
};
arith();
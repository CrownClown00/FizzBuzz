

for (var i = 1; i < 100; i++) {
   //console.log(i);
     if(i % 5 === 0 && i % 3 === 0  ){
        document.write(" Fizz-buzz ")
    }
    
    
    else if(i % 3 === 0  ){
       document.write(" fizz ")
    }
    
    else if(i % 5 === 0  ){
        document.write(" buzz ")
    }
    
    
    else{
        document.write(' '+' '+i);
    }
}
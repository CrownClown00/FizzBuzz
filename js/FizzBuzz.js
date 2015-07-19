
var userInput = prompt("type a number fom 1 - 100"); 



function counter(x){
 x= parseInt(userInput);
    
    
    if (x % 1 != 0){
         document.write("pietime")
        
}
    else if(x % 1 == 0) {

        for (var i = 1; i <= x; i++) {
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
}
}

counter();
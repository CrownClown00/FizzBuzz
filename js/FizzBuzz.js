

for (var i = 1; i < 100; i++) {
   //console.log(i);
     if(i % 5 === 0 && i % 3 === 0  ){
        console.log("Fizz buzz")
    }
    
    
    else if(i % 3 === 0  ){
        console.log("fizz")
    }
    
    else if(i % 5 === 0  ){
        console.log("buzz")
    }
    
    
    else{
        console.log(i);
    }
}
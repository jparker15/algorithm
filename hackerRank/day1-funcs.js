
/*
 * Create the function factorial here
   5! = 5*4*3*2*1 = 120
 */
function factorial(num){
    
    let fact = 1;
    
    for (let i = 1; i <= num; i++) {
        
        //console.log(i);
        fact *= i
        
    }
   console.log(fact);
   
}

factorial(5)



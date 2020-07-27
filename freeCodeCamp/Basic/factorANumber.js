//Return the factorial of the provided integer.
//5! = 1 * 2 * 3 * 4 * 5 = 120

function factorialize(num) {
    
    let x = 1

    for (let i = 1; i <= num; i++) {
        
     //console.log(i);
        x *= i
        
    }
    //console.log(x);
    return  x
  }
  
  factorialize(5);
  
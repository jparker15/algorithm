// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.

primeCheck = (num)=>{

   
    for( i = 2 ; i < num ; i++){

            if ( num % 2 !== 0){
                console.log("not a prime");
            }
            if (num === 2) return true
        
            if (
                num % 2 === 0 ||
                num % 3 === 0 ||
                num % 5 === 0 ||
                num % 7 === 0 ||
                num % 11 === 0
            )
            {
                return false
            } else {
                return true
            }


        
    }

    

}   

for (let i = 2; i < 100; i++) {
    console.log(primeCheck(i));
}


//prime numbers 2,3,5,7,11,13,17,19,23
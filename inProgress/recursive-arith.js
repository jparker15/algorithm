const noRecurSummation = (num, isSum) => {
//summation is the addition of a sequence of any kind of numbers, 
    if (num < 1 ){
        return console.error("num is too small")
    }
    let sum = isSum ? 0:1;

    for(let i = num; i >= 1; i--){
        
        if (isSum){
            sum += i;
        }
        else{
            sum *= i;
        }
        
    }
    
    return sum
    
}

const recersiveArithmatic = (num) => {
  
    
    

    if (num > 0){
        console.log(num, num-1);

        return num + recersiveArithmatic(num-1)
    }
    return num
   

}

console.log(recersiveArithmatic(10));

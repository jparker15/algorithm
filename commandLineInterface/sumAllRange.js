/**

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
 */

//  const readline = require("readline"),

//         rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout,
//         });

//     firstQuestion = (arr) => {
//         rl.question(`Return the sum of two numbers plus the sum of all the numbers between them. Number 1: ${arr[0]} Number 2: ${arr[1]} `, 
//         )
//     }

//     firstQuestion()

function sumAll(arr) {
    // arr is sorted in ascending order (smallest to largest)
    arr.sort((a,b) =>{
        return a-b
    })
    console.log(arr);


    
  }
  
  sumAll([1, 4]);
  

// TEST CASES 

/**
 * sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
 */
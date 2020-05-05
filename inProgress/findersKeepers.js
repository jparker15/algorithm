/**Create a function that looks through an array (first argument)
 *  and returns the first element in the array that passes a truth test (second argument).
 *  If no element passes the test, return undefined. */


function findElement(arr, func) {
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
      //  console.log(arr[i]);

        num = arr[i];

        if (func(num)) {

            console.log(num);
            return num
        }
        
            return undefined
        
        
    }

  }
  
  findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);
  
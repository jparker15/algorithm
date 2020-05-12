/**

You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
 */

function frankenSplice(arr1, arr2, n) {


   //array.slice(start, end) if start omitted acts like 0 index, if end omitted all elements will be selected
   let copyArray = arr2.slice();

     // console.log(copyArray);
     
    
    for (let i = 0; i < arr1.length; i++) {
       //console.log(arr1[i]);
       
       copyArray.splice(n,0,arr1[i])
       n++
    }
   
   // console.log(copyArray);

   
    
    

    return copyArray;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  
  /**
   * frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
All elements from the first array should be added to the second array in their original order.
The first array should remain the same after the function runs.
The second array should remain the same after the function runs.
   */ 
  //array.splice(index, howmany, item1, ....., itemX)

    //arr2.splice(n,0,a1)

    //console.log(arr2);
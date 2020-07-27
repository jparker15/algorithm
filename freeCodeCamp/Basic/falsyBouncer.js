/**
 * 
 *  {

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
!!value;
Boolean(value);
In JavaScript, there are 6 falsy values.
If you convert any of these to a boolean, it will return false
} 
 */

function bouncer(arr) {
    //console.log(arr);

    arr = arr.filter(e => Boolean(e) != false)
    console.log(arr);
    
   
//   let falsy =  arr.filter(element => Boolean(element) != false);

//   console.log(falsy);
  

    // for (let i = 0; i < arr.length; i++) {
        
    //    if(Boolean(arr[i]) === false ){
    //       arr.splice(i,1)
    //       console.log(arr);
          
          
           
    //    }
    // }   
        
    //    if (!!arr[i] === false){
    //       //console.log(arr[i]);
           
    //        arr.pop(arr[i])
    //    }
        
    

    //console.log(arr);
    
    return arr;
  }
  
  bouncer([false, null, 0, NaN, undefined, ""]);


/**
 * bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].
 */
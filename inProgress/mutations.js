/**
 
Return true if the string in the first element of the array contains 
all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all 
of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because
the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because 
all of the letters in "line" are present in "Alien".
 */

 
function mutation(arr) {
    //console.log(arr);
    
    let demo = arr[1].split("");

    for(let i = 0; i < arr[0].length;i++){
       // if arr element 0 includes characters from element 1 return true
      if(arr[0].includes(arr[1].split("")[i])){
        console.log(true);
        
      }
      else{
        console.log(false);
         
      }

    }

 
   

    
  }
  
  mutation(["hello", "hey"]);
  


 //TEST Cases
 /**
  * mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
mutation(["voodoo", "no"]) should return false.
mutation(["ate", "date"] should return false.
mutation(["Tiger", "Zebra"]) should return false.
mutation(["Noel", "Ole"]) should return true.
  */
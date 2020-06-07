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

function mutation (arr) {
  const word1 = arr[0];
  const word2 = arr[1].toLowerCase();

  for(let i = 0; i < word2.length; i++){
    
    let demo = word1.indexOf(word2[i]);

    if(demo == -1){
      console.log("Does not exist");
      
    }

  }

}

mutation(["hello","Hello"])
 
// function mutation(arr) {
//     //console.log(arr);
    
//     let demo = arr[1].split("");

//     for(let i = 0; i < arr[0].length;i++){
//        // if arr element 0 includes characters from element 1 return true
//       if(arr[0].includes(arr[1].split("")[i]) || arr[0].includes(arr[1].split("")[i].toUpperCase())){

//         console.log("match");
        

//       }
//       else if(i = arr[0].length - 1) {
//         console.log("end of loop");
        
//       }
//       else{

//         console.log(false);
        
//         return false
         
//       }

//     }

 
   

    
//   }
  
//   mutation(["hello", "Hello"]);
  


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
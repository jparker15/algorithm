/**
 * 

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */

function rot13(str) {
    const alphabet = [..."abcdefghijklmnopqrstuvwxyz".toUpperCase()];

    const strArr = str.split("");
   
   //create a index number that matches the given letter to that place in the alphabet
    

    for (let i = 0; i < alphabet.length; i++) {
        
       // console.log(alphabet[i],i);
        for (let j = 0; j < strArr.length; j++) {
            
            if(alphabet[i] == str[j]){
                
               console.log(alphabet[i],i);
                
            }
            
        }
        
    }

    return console.log(str)
  }
        //18 5 17 17  
  rot13("SERR PBQR PNZC");
  
/**
 * 
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

str.charCodeAt(index)
String.fromCharCode(num1[, ...[, numN]])
 */
//convert letter to ASCII key
// create a alphabet
// compared str first ascii to alpha string and compare indexs of each
// c


// const fearNotLetter = (str) => {
//     const alpha = new String("abcdefghijklmnopqrstuvwxyz");

//     for (let i = 0; i < alpha.length; i++) {
        
//        if(i >= str.length)return 
        
//        let demo = str.charCodeAt(i);
//        console.log(demo);
//         // console.log(alpha[i]);
//     //    console.log(demoStr);
//     }
//     // console.log(alpha);

//   }
  
//   fearNotLetter("abce");
const fearNotLetter = (str) => {
    
    for (let i = 0; i < str.length; i++) {
        console.log(i,str.charCodeAt(i+1),str.charCodeAt(i), str[i]);
    
        // if(str.charCodeAt(i+1) - str.charCodeAt(i) != 1){
        //     console.log(str.charCodeAt(i));
        //     console.log(str[i]);

        // }
    }

    
  }
  
  fearNotLetter("abce");
  

/**
 * fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("stvwx") should return "u".
fearNotLetter("bcdf") should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
 */
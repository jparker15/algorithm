/**
 * 

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

Solution ##
  // console.log(str);

  //remove all non-alphanumeric characters (punctuation, spaces and symbols)'
  /**
   *  regex
   *  [^]  = negated set
   *  \W = Not word. Matches any character that is not a word character(alphanumeric & underscore)
   *  _ = matches a "_" character (underscore: char code 95)
   *  \s = whitespace. matches any whitespace character(spaces, tabs, line breaks)
   *  */

  // const alpha = /[^\W_]/g;

  // remove spaces

  //str = str.replace(/\s/g,"");

  // str = str.replace(/[\W_\s]/g,"");
    //reversed string
  // const pal = str.split("").reverse().join("");

  // console.log(pal,str)
  
  // if (pal != str){
  //   return false
  // }
  // return true


const readline = require("readline"), 
    
    rl = readline.createInterface({

        input: process.stdin,
        output: process.stdout,
        prompt: "OHAI>"

    });

const palindrome = (str) => {

  rl.question("enter a string check if its a palindrome true or false\nstring:", (str)=>{

    str = str.toLowerCase();

    str = str.replace(/[\W_\s]/g,"");

    const pal = str.split("").reverse().join("");

    if (pal != str){
      console.log(`${str} is not a palindrome`);
      
    }else{
      console.log(`${str} is a palindrome!`);
    }

    rl.question(`Would you like to check another palindrome?\n(Yes or No)\ninput: `, restart);
      
  });
}


const restart = (answer) => {

  answer = answer.toLowerCase().substring(0,1);

  if (answer == "y" ){
    rl.question("enter a string check if it's a palindrome true or false\nstring:", palindrome);
  }
  else {
    rl.close();
  }

}


palindrome()
// basic free code camp algorithms

function convertToF(celsius) {

    // C * (9/5) + 35
    let fahrenheit = celsius * (9/5) + 35;

    return fahrenheit;
  }
  
  convertToF(30);


const reverseAString = (str)=>{

  let empty = "";

  for (let i = str.length - 1; i >= 0; i--) {
    
    console.log(str[i]);
    empty += str[i]
    
  }
  // console.log(empty);
}

// reverseAString("Haliax")

const factorialize = (num) =>{

  let factor = 1;

  for (let i = 1; i < num; i++) {
    
    factor *= num
    
  }
  console.log(factor);

}

// factorialize(5);

const longestWord = (str) =>{
  str = str.split(" ");

  let longest = ""
  // console.log(longest.length);

  // console.log(str.length);
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    if(str[i].length > longest.length){
      longest = str[i];
    }
    
  }
  console.log(longest);
  return longest.length;
}

console.log(longestWord("The quick brown fox jumped over the lazy dog"));

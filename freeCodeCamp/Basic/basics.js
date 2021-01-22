const convertToF = (celsius) =>{
  let fahrenheit = celsius * 9/5 + 32;
  // console.log(fahrenheit);
  return fahrenheit;
}

convertToF(-30);

const reverseString = (str) => {
  let revStr = ""
  for (let i = str.length - 1; i >= 0; i--) {
    
    revStr += str[i];
    
  }
  // console.log(revStr);
  return str;
}

reverseString("hello");

const factorialize = (num) => {

  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
    // console.log(factorial);
  }
  num = factorial;
  // console.log(num);
  return num;
}

factorialize(5);

const findLongestWordLength = (str) => {

  str = str.split(" ");

  let longest = "";

  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    if (str[i].length > longest.length){
      longest = str[i];
    }
    
  }
  // console.log(longest.length);

  str = longest;

  return str.length;
}

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"); 


const largestOfFour = (arr) => {
  // console.log(arr);

  let largest = [];

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    let largestNum = arr[i][0];
    for (let j = 0; j < arr.length; j++) {
      // console.log(arr[i][j]);
      if(arr[i][j] > largestNum){
        largestNum = arr[i][j];
      }
      
    }
    largest[i] = largestNum;
    // console.log(largest);
  }
  

  return arr;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

//Check if a string (first argument, str) ends with the given target string (second argument, target).
const confirmEnding = (str, target) => {

  let check = "";
  for (let i = str.length - 1; i >= 0; i--) {
    
  }

  for (let i = 0; i < str.length; i++) {
    console.log(str[i] , i, target[i]);
    
  }

  return str;
}

confirmEnding("Congratulation", "on");
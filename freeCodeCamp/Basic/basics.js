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

// console.log(longestWord("The quick brown fox jumped over the lazy dog"));

const largestOfFour = (arr) => {

  let values = [];

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    let larget = arr[i][0];
    for (let j = 1; j < arr.length; j++) {



        if(arr[i][j] > larget){
          larget = arr[i][j];
        }
       
    }
    values[i] = larget;
    
  }
  console.log(values);

}

// largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);


const confirmEnding = (str,target) =>{
  str = str.split(" ");

  for (let i = str.length - 1; i >= 0 ; i--) {
    console.log(str[i]);
    if(str[0].includes(target)){
      
       console.log(true);
    } 
     console.log(false);
    
  }


  
}

// confirmEnding("Open sesame", "same");

const repeatString = (str,num) =>{
    let empty = "";
    let count = 0;
    while(num > count){
      count ++
      empty + str;
    }
    return str;

}

// repeatString("abc", 3);

const truncateStr = (str,num) =>{

  str = str.split(" ")

  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if(str.length > num){
      break;
    }
    
  }

}

truncateStr("A-tisket a-tasket A green and yellow basket", 8);

const findElement = (arr, func) => {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
  }
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

const booWho = (bool) =>{

  if(bool === true){
    return true
  }
  else {
    return false
  }
  
}

booWho(null);

const titleCase = (str) =>{
  
  let strings = str.split(" ");
     
  let empty = [];

  for (let i = 0; i < strings.length; i++) {
    let capital = strings[i].substring(0,1) + strings[i].substring(1,strings[i].length.toLowerCase());

    console.log(capital);

    empty.push(capital);
  }
  return str;
}

titleCase("I'm a little tea pot");

const sumFibs = (num) =>{

  let prevNum = 0;
  let currNum = 1;
  let sum =0;

  while( currNum <= num){
    if(currNum % 2 != 0){
      currNum + sum;
      console.log(sum);
    }
    prevNum++;
    
  }


  return num;
}

sumFibs(4);

const diffArray = (arr1, arr2)=> {
  var newArr = [];
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

const steamrollArray = (arr) =>{
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);

const randomWholeNum =() => {

  // Only change code below this line

  return Math.random();
}

const convertToRoman = (num) => {

  let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNumeral = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  return num;
 }
 
 convertToRoman(36);
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

//Return the factorial of the provided integer.
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

//Return the length of the longest word in the provided sentence.
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

//Return an array consisting of the largest number from each provided sub-array
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

  // console.log(str.length, str.substring(12,14));

  if(str.substring(str.length - target.length,str.length) == target){
    // console.log(true);
    return true
  }
  // console.log(false);
  return false
  
}

confirmEnding("He has to give me a new name", "name");

//Repeat a given string str (first argument) for num times (second argument)
const repeatStringNumTimes = (str, num)=> {
  let repeatStr = "";

  for (let i = 0; i < num; i++) {
    // console.log(str);
    repeatStr += str;
  }
  // console.log(repeatStr);
  if(num <= 0){
    return str = "";
  }

  str = repeatStr;
  // console.log(str, 0);
  return str;
}

repeatStringNumTimes("*", 3);

//Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.
const truncateString = (str, num) => {
  let trunc;
  if (str.length > num){
    trunc = str.slice(0,num) + "...";
    // console.log(trunc);
    str = trunc;
  }
  // console.log(trunc, str);
  return str;
}

truncateString("A-",1);

const findElement = (arr, func)=> {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    num = arr[i];
  }
  // console.log(func);
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//Check if a value is classified as a boolean primitive. Return true or false.
const booWho = (bool) => {

  // if (bool !== true || false){
  //   return false;
  // }
  // if (bool === false){
  //   console.log(true);
  //   return true;
  // }
  
  return typeof bool === "boolean";
}

booWho(false);

const titleCase = (str)  =>{
  str = str.split(" ");
  let newStr = ""
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    let demo = str[i].substring(0,1).toUpperCase() + str[i].substring(1,str[i].length).toLowerCase();
    newStr += demo + " ";
    // console.log(demo);
    
  }
  // console.log(newStr);
  return str;
}

titleCase("sHoRt AnD sToUt");
/**
You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
 */
const frankenSplice = (arr1, arr2, n) => {

  let newArr = [];

  // newArr.push(arr2);
  // console.log(newArr);
  for (let i = 0; i < arr1.length; i++) {
    newArr.slice(arr2[i]);
    
  }
  // console.log(newArr);
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

/**Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "",
 undefined, and NaN. */

const bouncer = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if(typeof arr[i] === "boolean"){
      console.log(arr[i]);
    }
    
  }
  return arr;
}

bouncer([7, "ate", "", false, 9]);
/**Return the lowest index at which a value (second argument) 
 * should be inserted into an array (first argument)
 *  once it has been sorted.
 *  The returned value should be a number. */
const getIndexToIns = (arr, num) =>{
  return num;
}

getIndexToIns([40, 60], 50);


/**Return true if the string in the first element of the array
 * contains all of the letters of the string in the second element of the array.
 * */
const mutation = (arr)=> {
  return arr;
}

mutation(["hello", "hey"]);
/**Write a function that splits an array (first argument) into groups the length of size
 * (second argument) and returns them as a two-dimensional array. */
const chunkArrayInGroups = (arr, size) =>{
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

function fearNotLetter(str) {
  return str;
}

fearNotLetter("abce");a
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

const largestOfFour = (arr) => {
  // console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
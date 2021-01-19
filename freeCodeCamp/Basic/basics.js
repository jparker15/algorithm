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

  let largest = [];

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    for (let j = 0; j < arr.length; j++) {
      // console.log(arr[i][j]);
      if(arr[i][j] > arr[i][0]){
        largest[i] = arr[i][j];
      }
      
    }
  }
  console.log(largest);

  return arr;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
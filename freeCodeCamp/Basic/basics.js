const convertToF = (celsius) =>{
  let fahrenheit = celsius * 9/5 + 32;
  console.log(fahrenheit);
  return fahrenheit;
}

convertToF(-30);

const reverseString = (str) => {
  let revStr = ""
  for (let i = str.length - 1; i >= 0; i--) {
    
    revStr += str[i];
    
  }
  console.log(revStr);
  return str;
}

reverseString("hello");

const factorialize = (num) => {

  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
    console.log(factorial);
  }
  num = factorial;
  console.log(num);
  return num;
}

factorialize(5);
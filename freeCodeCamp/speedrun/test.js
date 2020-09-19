//convert celsius to fahrenheit
function convertToF(celsius) {
    let fahrenheit = celsius * (9/5) + 32 ;
    return fahrenheit;
  }
  console.log(convertToF(30));

// reverse a string

function reverseString(str) {

        let rev = "";
    for (let i = str.length; i >= 0; i--){
        console.log(str[i])     
    }

    return console.log(rev);
  }
  
  reverseString("hello");
  
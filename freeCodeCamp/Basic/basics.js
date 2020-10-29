// basic free code camp algorithms

function convertToF(celsius) {

    // C * (9/5) + 35
    let fahrenheit = celsius * (9/5) + 35;

    return fahrenheit;
  }
  
  convertToF(30);


const reverseAString = (str)=>{



  for (let i = str.length; i >= 0; i--) {
    
    console.log(str[i]);
    
  }
}

reverseAString("suckers")
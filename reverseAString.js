//Reverse the provided string.

function reverseString(str) {
    let reverse = "";
    for(let i = str.length - 1;i >= 0; i--){
       // console.log(str[i]);
        reverse += str[i]
        //reverse = reverse + str[i]
    }

   console.log(reverse);
    

    return reverse;
  }
reverseString("jello");

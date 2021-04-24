const steamrollArray = (arr) =>{
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    
  }
    return arr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
/**
 
Check if a value is classified as a boolean primitive.
Return true or false.
Boolean primitives are true and false.} bool 
 */


function booWho(bool) {
      //parameter is strictly equal to a boolean primitive return bool prim 
   if (bool === true){
      return true
   }
   else if (bool === false ){
      return false
   }
   else {
      return false; 
   }
    
  }
  
  booWho(null);
  

  /**
   * booWho(true) should return true.
booWho(false) should return true.
booWho([1, 2, 3]) should return false.
booWho([].slice) should return false.
booWho({ "a": 1 }) should return false.
booWho(1) should return false.
booWho(NaN) should return false.
booWho("a") should return false.
booWho("true") should return false.
booWho("false") should return false.
   */
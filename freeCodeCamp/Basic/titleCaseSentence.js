/**
 * 
Return the provided string with the first letter of each word capitalized.
 Make sure the rest of the word is in lower case.
 */
function titleCase(str) {

   // console.log(str.split(" "))
    // parameter is split by a space into the individual words of the string
    let strings = str.split(" ");
     
    let empty = [];

    for (let i = 0; i < strings.length; i++) {
        
      //  console.log(strings[i]);

        let capitalized = strings[i].substring(0,1).toUpperCase() + strings[i].substring(1,strings[i].length).toLowerCase();

        empty.push(capitalized);
    }
    
     //console.log(empty.join(" "));
     return (empty.join(" "))

    
  }
  
  titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");


  /**

titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") should return Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.
   */
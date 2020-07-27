/**Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
 *  Return the truncated string with a ... ending. */


function truncateString(str, num) {
    //if argument string length(number of UTF-16 code units in the string) greater then num arguement
  if (str.length > num){
    //slice (returns a copy of an array selected from "begin" to "end" index of array) str from index 0 to num argument and concatenate "..." string

    // let truncate = str.slice(0,num) + "..."
    // console.log(truncate);
    // str = truncate;
    // console.log(str);
    
    return str.slice(0,num) + "..."
  }
  //if str length is less then or equal to num return the string

  if (str.length <= num){
    return str
  }
 //console.log(str);
  
    
     
  }
  
  //truncateString("A-tisket a-tasket A green and yellow basket", 8);

  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)// should return "A-tisket a-tasket A green and yellow basket".
  

  //Test Cases

  /**truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1) should return "A...".
truncateString("Absolutely Longer", 2) should return "Ab...". */
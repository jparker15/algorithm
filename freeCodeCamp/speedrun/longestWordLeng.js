/**
 * 
 * @param {

Return the length of the longest word in the provided sentence.

Your response should be a number.}
 */

function findLongestWordLength(str) {

    let longest = "";

    str = str.split(" ");

    for (let i = 0; i < str.length; i++) {
        if(str[i].length > longest.length) longest = str[i];
    }
    
    return console.log(longest);
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  
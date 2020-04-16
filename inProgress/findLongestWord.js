/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/


function findLongestWordLength(str) {
    
  let words = str.split(" ");
    //console.log(words);

    for (let i = 0; i < words.length; i++) {
      //console.log(words[i],i);
      let longestWord = []
      
      if (words[i].length > longestWord){
        longestWord.push(words[i])
        
      }

      console.log(longestWord);
    }

    





}
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  

  
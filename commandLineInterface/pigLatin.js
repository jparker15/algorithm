/**

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end. */


function translatePigLatin(str) {
    
                    //regex global find all vowels
    const vowelTest = /[aeiou]/g,
        //test if first character is a vowel
        vtResult = vowelTest.test(str[0]);

    if(vtResult){
       
        str += "way"
        console.log(str);
    }           //regex global find anything not vowels
    const consonantTest = /[^aeiou]/g,
        ctResult = consonantTest.test(str[0]);

    if(ctResult){
        for (let i = 0; i < str.length; i++){
            
            
             const test = vowelTest.test(str[i]);
            if(test){//a vowel was found after consonant
                console.log(i,str[i]);

                const pig = str.substring(i-1,i);
                console.log(pig);
                
                
                
            } 
            else{

                str +="ay";
               return console.log(str);
                
            }     
        }
    }
        return str
  }
  
  translatePigLatin("california");
  

  /**
   * translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".
   */
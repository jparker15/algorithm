/**
 * 
 * @param {

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.} str 
 */

function translatePigLatin(str) {
    const consonant = /^[aeiou]/g;
    const vowel = /[aeiou]/g;

    console.log(vowel);

    for (let i = 0; i < str.length; i++) {
        
        if(str[i].match(consonant)){
            console.log(str[i]);
        }
        
    }
    return str;
  }
  
  translatePigLatin("consonant");

/**
 * translatePigLatin("california") should return "aliforniacay".

translatePigLatin("paragraphs") should return "aragraphspay".

translatePigLatin("glove") should return "oveglay".

translatePigLatin("algorithm") should return "algorithmway".

translatePigLatin("eight") should return "eightway".

Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".

Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".
 */
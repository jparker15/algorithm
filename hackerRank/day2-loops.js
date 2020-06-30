
/*
Observe the following:

    Each letter is printed on a new line.
    Then the vowels are printed in the same order as they appeared in 

.
Then the consonants are printed in the same order as they appeared in
.
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(str) {
    for (let i = 0; i < str.length; i++) {
       // console.log(s[i]);
       let vowls = /[aeiou]/g,
        test = vowls.test(str[i]);

        if(test){
            console.log(str[i]);
        }
        
    }
    for(let j = 0; j < str.length;j++){
        let vowels = /[aeiou]/g,
            test = vowels.test(str[j]);
        if(!test){
            console.log(str[j]);
            
        }
    }

    
    
    
}

vowelsAndConsonants("javascriptloops")
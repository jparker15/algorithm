function getLetter(s) {
    let letter;
    //console.log(`param:${s}\n`);
    for (let i = 0; i < s.length; i++) {
        
        letter = s[0];
       // console.log(letter);
        
        switch(true){

            case /[aeiou]/.test(letter):
               letter = "A"
               break
                 
            case /[bcdfg]/.test(letter):
                letter = "B"
               break
                 
            case /[hjklm]/.test(letter):
                letter = "C"
                break
                 
            case /[npqrstvwxyz]/.test(letter):
                letter = "D"
                break
        }
     
    }
    
        // console.log(letter);
        
    return letter;
}

getLetter("adfgt")
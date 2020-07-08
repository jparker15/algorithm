function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    const re = /(\d)+/;
    
    /*
     * Do not remove the return statement
     */

     return re
     
}

function main(str) {
    const re = regexVar();
    const s = str    
    const r = s.match(re);
    
    for (const e of r) {
        console.log(r,e);
    }
}


main("102,1948948 and 1.3 and 4.5")
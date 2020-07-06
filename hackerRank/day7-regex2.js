function regexVar(str) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
        // const re = /[MDE](r|s|rs)\.\s[a-Z]/;\

        /**
         * [MDE] => matches any character in brackets
         * (r|s|rs) => matches capturing group (r or s or rs)
         * \. => escapes "." matches .
         * /s => Matches any whitespace character (spaces, tabs, line breaks).
         * [A-z] => matches any character between all upper/lower case characters
         * + => Matches 1 or more of the preceding token.
         * $ => Matches the end of the string, or the end of a line if the multiline flag (m) is enabled. 
         *      This matches a position, not a character. 
         */

        const re = /[MDE](r|s|rs)\.[A-z]+$/

    
    /*
     * Do not remove the return statement
     */
   console.log(re.test(str));
   
}

regexVar("Er.Dr.")
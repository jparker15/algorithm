const readline = require("readline"), 
    
    rl = readline.createInterface({

        input: process.stdin,
        output: process.stdout,
        prompt: "OHAI>"

    });

    
    let regexTest = /\s/g;

            

    console.log(regexTest);

    // Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

    function spinalCase() {

        
        rl.question("Enter a string and it will return in spinal case\n",(string) =>{
            // changes all entries to lowercase
            string = string.toLowerCase();

            let regexTest = /\s/g;

            

            console.log(regexTest);
            //close readline
            rl.close();

        });

       
      }
      
     // spinalCase();


      /**spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things". */
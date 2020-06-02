// this file will use NODE.JS


const readline = require("readline"), 
    
    rl = readline.createInterface({

        input: process.stdin,
        output: process.stdout,
        prompt: "OHAI>"

    });

    // rl.question("What is your name?\nName:", (answer) => {
            

    //        rl.question("What is your social?\nSocial:", (a) =>{
                
    //            rl.close();

    //        })
            
    // });
    

    firstQuestion()
    


    function firstQuestion (answer){

        //console.log(answer);

        rl.question("enter a string and it will be reversed\nstring:", (answer) =>{
              // reverse a string

            let newAnswer = "";

            for (let i = answer.length - 1; i >=0; i--){

             //console.log(answer[i]);
        
            newAnswer += answer[i];

     }

            console.log(`\nOrginal: ${answer}\nReversed: ${newAnswer}\n`);
   

        rl.question(`Would you like to reverse again\n(y/n)\ninput: `, secondQuestion)
        });
        

     
    }

    function secondQuestion (answer){
        
        answer = answer.toLowerCase().substring(0,1);

        if (answer == "y"){
            rl.question("Enter a String and it will be reversed \n string:", firstQuestion);
        }

        else{
            //close program
           thirdQuestion = (num) => {

            rl.question("Enter a rating 1 - 10 TYVM ")
            
           }
        }
        
        
    }


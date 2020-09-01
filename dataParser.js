const http = require("http");
const fs = require("fs");

    let array = [];

   let demo = fs.readFileSync("rawdata.txt","utf8",(err,data)=>{
      if(err) throw err;
           return(data);
    });   

    demo = demo.split(`\r\n`);
    // \r\n == Enter key press in Windows 
    console.log(demo);

    for (let i = 0; i < demo.length; i++) {
        
            array.push(demo.slice(i,2))
        
    }
    console.log(array);

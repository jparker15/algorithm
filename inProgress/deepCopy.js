// create a function tthat returns a deep copy of an object. 

const demo = (obj) =>{
   // let clone = JSON.parse(JSON.stringify(obj));

    //JSON.parse parsifies a given string into a JS Object 
    //JSON. stringify coverts a JS Object into a string 



    // return console.log(obj,clone)

    // ES6 spred syntax 
    let clone = {...obj};

    clone.f.nested.deep = "Best";


    console.log(clone,"\n\n",obj);
    /**
     * soft copy uses same object memeory reference
     * hard copy seperates the copies memory reference
     */

}


const testObj = {
    a: "test",
    b: 3,
    c: {d:"testing", e:7},
    f: {nested: {deep: "thisisdeep"}},
    g: () => {console.log("function test");
    }

};

const test2 = {
    a: [[2,5],[3,1],[[42,null]],["string",true]],
    b:{d:"testing", e:7},
    f: {nested: 1}
}

const test3 = {
    nested: {
        method: () => {
            console.log("new body");
            
        },
    }
}

demo(testObj)
// let count = 0

// const recur = () =>{
//     count++
//     console.log("test",count);
//     recur()
// }

// recur()

/**
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.
Note
You have to use the arguments object.
 */

function destroyer(arr) {

    const demo = [];
    
    for (const arg of arguments) {
        // console.log(typeof(arg));

        if(typeof(arg) !== "object"){
            demo.push(arg)
        }
    }

    for (let i = 0; i < arr.length; i++) {
      
        const seek = arr.includes(1);
        
    }

// 
    // console.log(arr);

    // console.log(arr);
}
  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")


/**
 * destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].
 */

 
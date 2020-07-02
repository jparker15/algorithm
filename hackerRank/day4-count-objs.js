/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    // console.log(objects);
    let count = 0
    for (const it of objects) {
        console.log(it.x,it.y);

        if(it.x == it.y){
            count++
            
        }
        
    }
    return console.log(count);
    
}

getCount(
[
     {x:5}
    ,{x:1,y:1}
    ,{x:2,y:3}
    ,{x:3,y:3}
    ,{x:3,y:4}
    ,{x:4,y:5}
]
)
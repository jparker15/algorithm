/**
 * 
 * @param {

Return an array consisting of the largest number from each provided sub-array.
 For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].} arr 
 */

function largestOfFour(arr) {

    let demo = [0,0,0,0];

    let omed = [];

    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        // console.log(demo[i]);

        for(let j = 0; j < arr.length; j++){
            // console.log(arr[i][j]);

            if(arr[i][j] > demo[i]){

            //    console.log(arr[i][j]);
               demo[i] = arr[i][j]
            }
            if(arr[i][j] < 0){
                
                omed.push(-Math.abs(arr[i][j]));
                omed.sort((a,b)=>b-a)
                console.log(omed);

            }
            else {
            //    console.log(arr[i][j]);
            }
            
        }
    }

    
    console.log(demo);

}
  
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
  

  /**
   * 
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3]
   */
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let max = 0,
        second = 0;
        //console.log(nums);
    for (let i = 0; i <  nums.length; i++) {

       // console.log(nums[i]);
        if(nums[i]>max){
            max = nums[i]
        }
        if (max == second && nums[i] < max ){
            second = nums[i];
        }
        console.log(max,nums[i]);
        
    }
    
    console.log(max);
    console.log(second);
    


}


getSecondLargest([10,9,9,8,8,11,8,0,9,1])
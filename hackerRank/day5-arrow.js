/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {

    for (let i = 0; i < nums.length; i++) {
        
        console.log(nums[i]%2);

        if(nums[i]%2 == 1){
            nums[i] *= 3 
        }
        if(nums[i]%2 == 0){
            nums[i] *=2
        }

        
    }
    
    return console.log(nums);
    
    
    
}

modifyArray([1,2,3,4,5])
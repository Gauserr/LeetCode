/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   const complementStore = new Map(); 
   for (let i = 0; i < nums.length; i++){
       if (complementStore.has(nums[i]))
        return [complementStore.get(nums[i]), i]

       const complement = target - nums[i];
       complementStore.set(complement, i)
   }
};
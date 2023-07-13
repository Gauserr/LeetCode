/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   const store = {};
   for (let i = 0; i < nums.length; i++){
     const comp = target - nums[i];
     if (String(comp) in store) return [store[comp], i]
     store[nums[i]] = i;
   }   
};
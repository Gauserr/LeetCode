/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const store = {} 
  for (let i = 0; i < nums.length; i++){
    const complement = target - nums[i]
    if (complement in store)
      return [store[complement], i]
    store[nums[i]] = i
  }
};
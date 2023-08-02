/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
   const countStore = {} 
   for (let num of nums){
     if (!countStore[num]) countStore[num] = 1
     else countStore[num] = countStore[num] + 1
   }
  return Object.entries(countStore).sort((a, b) => b[1] - a[1]).slice(0, k).map(pair => +pair[0])
};
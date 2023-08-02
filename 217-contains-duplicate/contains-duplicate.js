/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   const store = new Set()
   for (let num of nums){
     if (store.has(num)) return true
     store.add(num)
   }
   return false
};
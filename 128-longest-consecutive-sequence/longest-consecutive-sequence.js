/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
   const numsSet = new Set(nums)
   let longest = 0
   let currentLength = 1
   for (let num of numsSet){
     if (!numsSet.has(num - 1)){
       let consecutive = true
       while (consecutive === true){
         if (numsSet.has(num + currentLength)){
           currentLength++
         }
         else consecutive = false
       }
       longest = (longest > currentLength ? longest : currentLength)
       currentLength = 1
     }
   }
   return longest
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
   const sorted = nums.sort((a, b) => a - b)
   const result = []
   let i, l, r
   for (i=0;i < sorted.length; i++){
     if (i > 0 && (sorted[i] === sorted[i - 1])) continue
     l = i + 1
     r = sorted.length - 1
     while (l < r){
       const threeSum = sorted[i] + sorted[l] + sorted[r]
       if (threeSum < 0) l+=1
       else if (threeSum > 0) r-=1
       else {
         result.push([sorted[i], sorted[l], sorted[r]])
         l = l + 1
         while (l < r && sorted[l] === sorted[l-1])
          l = l + 1
       }
     }
   }
   return result
};
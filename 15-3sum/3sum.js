/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const sortedNums = nums.sort((a, b) => a-b)
  const triplets = []
  let current;
  for (let i = 0; i <= nums.length - 3; i++) {
    if (sortedNums[i] === current) continue
    current = sortedNums[i]
    let j = i+1
    let k = sortedNums.length - 1
    while (j < k) {
      const sum = current + sortedNums[j] + sortedNums[k]
      if (sum < 0) j++
      else if (sum > 0) k--
      else {
        triplets.push([current, sortedNums[j], sortedNums[k]])
        j++
        k--
        while (j < k){
          if (sortedNums[j] === sortedNums[j-1]) j++
          else if (sortedNums[k] === sortedNums[k+1]) k--
          else break
        }
      }
    }
  }
  return triplets
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // Time: O(n) Space: O(n)
  //  const prefix = []
  //  for (let i = 0; i < nums.length; i++){
  //    if (i === 0) prefix.push(nums[0])
  //    else prefix.push(nums[i] * prefix[i - 1])
  //  }

  // let postfix = []
  // for (let i = nums.length - 1; i >= 0; i--){
  //   if (i === nums.length - 1) postfix.unshift(nums[i])
  //   else postfix.unshift(nums[i] * postfix[0])
  // }

  // const result = []
  // for (let i = 0; i < nums.length; i++){
  //   result.push((prefix[i - 1] ?? 1) * (postfix[i + 1] ?? 1))
  // }

  // return result

  //Time O(n) Space O(1) because instructions state result array does not 
  //count as extra memory

  const result = []
  let prefix = 1
  let postfix = 1
  for (let i=0; i < nums.length; i++){
    result.push(prefix)
    prefix = nums[i] * prefix
  }

  for (let i = nums.length - 1; i >= 0; i--){
    result[i] = result[i] * postfix
    postfix = nums[i] * postfix
  }


  return result
}
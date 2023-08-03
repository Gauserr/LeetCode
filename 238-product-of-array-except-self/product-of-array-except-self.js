/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
   const prefix = []
   for (let i = 0; i < nums.length; i++){
     if (i === 0) prefix.push(nums[0])
     else prefix.push(nums[i] * prefix[i - 1])
   }

  let postfix = []
  for (let i = nums.length - 1; i >= 0; i--){
    if (i === nums.length - 1) postfix.unshift(nums[i])
    else postfix.unshift(nums[i] * postfix[0])
  }

  const result = []
  for (let i = 0; i < nums.length; i++){
    // if (i === 0) result.push(postfix[i+1])
    // else if (i === nums.length - 1) result.push(prefix[i - 1])
    // else result.push(prefix[i-1] * postfix[i+1])
    result.push((prefix[i - 1] ?? 1) * (postfix[i + 1] ?? 1))
  }

  return result
}
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const array = String(x).split('')
  console.log(array)
  if (array.length === 1 || array.length === 0)
    return true
  if (array[0] !== array[array.length - 1])
    return false
  return isPalindrome(array.slice(1, -1).join(''))
};
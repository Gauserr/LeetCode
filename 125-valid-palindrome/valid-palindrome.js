/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const alphaNumericString = s.replace(/[^a-zA-Z0-9]/g, '').toUpperCase()
  console.log(alphaNumericString)
  let i = 0
  let j = alphaNumericString.length - 1   
  while (i < j){
    if (alphaNumericString[i] !== alphaNumericString[j]) return false
    i++
    j--
  }
  return true
};
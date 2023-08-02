/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  const sStore = {}
  const tStore = {}
  for (let letter of s)
    sStore[letter] = sStore[letter] ? sStore[letter] + 1 : 1
  for (let letter of t)
    tStore[letter] = tStore[letter] ? tStore[letter] + 1 : 1
  console.log(sStore, tStore)
  for (let letter in sStore){
    if (!(letter in tStore))
      return false
    if (sStore[letter] !== tStore[letter])
      return false
  }
  return true
};
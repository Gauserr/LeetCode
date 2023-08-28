/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
  let s = ''
  for (let string of strs){
    s += (string.length) + '#' + string
  }
  return s
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
  const strs = []

  let i = 0 
  while (i < s.length){
    let j = i
    while (s[j] !== '#'){
      j = j + 1
    }
    const len = parseInt(s.slice(i, j))
    const str = s.slice(j+1, j + len + 1)
    strs.push(str)
    i = j + len + 1
  }
  
  return strs
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
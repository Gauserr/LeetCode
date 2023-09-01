/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const letters = new Set()
    let longest = 0
    let len = 0
    let l = r = 0
    for (let char of s) {
        if (!letters.has(char)) {
            letters.add(char)
        }
        else {
            while (s[l] !== char) {
                letters.delete(s[l])
                l++
            }
            l++
        }
        r++

        len = r - l
        if (len > longest) longest = len
    }
    return longest
};
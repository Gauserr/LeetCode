/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   const map = {}
   for (let str of strs){
     const store = str.split('').sort().join('')
     if (!map[store]) map[store] = []
     map[store].push(str)
   }
   return Object.values(map)
};

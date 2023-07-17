/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = []
  const valids = {
    '(': ')',
    '{':'}',
    '[':']'
  }
  for (let symbol of s) {
    if (symbol in valids) stack.push(valids[symbol])
    else {
      const close = stack.pop()
      if (close !== symbol) return false
    }
  }

  return stack.length === 0
};
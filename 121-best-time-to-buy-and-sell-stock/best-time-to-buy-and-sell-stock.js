/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let i = 0
   let j = 1
   let max = 0
   while (j < prices.length){
     if (prices[j] > prices[i]) {
       const profit = prices[j] - prices[i]
       if (profit > max) max = profit
     }
     else {i = j}

     j++
   } 
   return max
};
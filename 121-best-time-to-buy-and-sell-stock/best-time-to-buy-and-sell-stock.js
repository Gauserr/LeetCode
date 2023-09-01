/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l = 0
    let r = 1
    let maxProfit = 0
   while (r < prices.length) {
       const profit = prices[r] - prices[l]
       if (profit > maxProfit) maxProfit = profit
       else if (prices[r] < prices[l])
        l = r

        r++
   }

   return maxProfit
};
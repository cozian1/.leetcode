/*
 * @lc app=leetcode id=1475 lang=javascript
 *
 * [1475] Final Prices With a Special Discount in a Shop
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    for(let i=0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
            if(prices[j]<=prices[i]){
                prices[i]-=prices[j];
                break;
            }
        }
    }
    return prices;
};
// @lc code=end
//console.log(finalPrices([8,4,6,2,3]))
//console.log(finalPrices([8,7,4,2,8,1,7,7,10,1]))

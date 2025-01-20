/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let min=-2147483648,max=2147483647;
    let b=x>0?1:-1;
    x=b*Number(String(Math.abs(x)).split('').reverse().join(''));
    return (x >= min && x <= max) ? x : 0 ;
};
// @lc code=end


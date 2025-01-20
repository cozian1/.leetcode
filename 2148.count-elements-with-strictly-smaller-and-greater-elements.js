/*
 * @lc app=leetcode id=2148 lang=javascript
 *
 * [2148] Count Elements With Strictly Smaller and Greater Elements 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    let max=Math.max(...nums);
    let min=Math.min(...nums);
    if(min===max) return 0;
    return nums.filter((num)=> num!=min && num!=max).length;
};
// @lc code=end


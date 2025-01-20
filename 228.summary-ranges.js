/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let box=[],s=0;
    if(nums.length==0) return box;
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]+1!=nums[i+1]){
            box.push(s==i?''+nums[i]:nums[s]+'->'+nums[i]);
            s=i+1;
        }
    }
    s==nums.length-1?box.push(''+nums[s]):box.push(nums[s]+'->'+nums[nums.length-1]);
    return box;
};
// @lc code=end


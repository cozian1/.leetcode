/*
 * @lc app=leetcode id=1047 lang=javascript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    for(let i=1;i<s.length;i++){
        if(s[i]===s[i-1]){
            s=s.substring(0,i-1)+s.substring(i+1);
            i-=2;
        }
    }
    return s;
};
// @lc code=end


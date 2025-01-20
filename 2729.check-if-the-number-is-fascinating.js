/*
 * @lc app=leetcode id=2729 lang=javascript
 *
 * [2729] Check if The Number is Fascinating
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    let s=n.toString()+n*2+n*3;
    let f=true;
    if(s.length!==9) f=false;
    for(let i='1';f && i<='9';i++){
        if(s.indexOf(i)==-1)
            f=false;
    }
    return f ;
};
console.log(isFascinating(192));
// @lc code=end


/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let n1=num1.split('');
    let n2=num2.split('');
    let carry=0;
    let sum='';
    for(let i=1;i<=Math.max(n1.length,n2.length);i++){
        let t=(i<=n1.length?Number(n1[n1.length-i]):0)+(i<=n2.length?Number(n2[n2.length-i]):0);
        t+=carry;
        carry=t<10?0:Math.floor(t/10);
        sum+=t%10;
    }
    sum+=carry!=0?carry:'';
    return sum.split("").reverse().join("");
};
// @lc code=end

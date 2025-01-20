/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let a1=a.substring(a.indexOf('1')).split('');
    let b1=b.substring(b.indexOf('1')).split('');
    let carry=0;
    let sum='';
    for(let i=1;i<=Math.max(a1.length,b1.length);i++){
        let t=(i<=a1.length?Number(a1[a1.length-i]):0)+(i<=b1.length?Number(b1[b1.length-i]):0);
        if(carry==0){
            carry=t>1?1:0;
            sum+=(t>1?0:t);
        }else if(t>1){
            sum+=1;
        }else{
            t+=carry;
            carry=(t<=1)?0:1;
            sum+=((t<=1)?t:0);
        }
    }
    sum+=carry!=0?carry:'';
    return sum.split("").reverse().join("");
};
// @lc code=end


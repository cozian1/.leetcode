/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let box=new Set([n]);
    while(n!=0){
        let sum=0;
        for(let i of n+''.split('')){
            sum+=Math.pow(Number(i),2);
        }
        if(box.has(sum)){
            return sum==1?true:false;
        }
        box.add(sum);
        n=sum;
    }
};
// @lc code=end


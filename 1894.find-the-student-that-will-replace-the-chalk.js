/*
 * @lc app=leetcode id=1894 lang=javascript
 *
 * [1894] Find the Student that Will Replace the Chalk
 */

// @lc code=start
/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    let sum=0;
    chalk.forEach((item)=>{sum+=item});
    k%=sum;
    for(i in chalk){
        if(k<chalk[i])
            return i;
        k-=chalk[i];
    }
};
console.log(chalkReplacer([3,4,1,2],25));
// @lc code=end


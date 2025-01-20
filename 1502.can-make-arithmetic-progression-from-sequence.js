/*
 * @lc app=leetcode id=1502 lang=javascript
 *
 * [1502] Can Make Arithmetic Progression From Sequence
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b)=> a-b );
    let flag=true;
    let gap=arr[1]-arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]-arr[i-1] !== gap){
            flag= false;
            break;
        }
    }
    return flag;
};
canMakeArithmeticProgression([1,6,3,8,2,6,3,9,4]);
// @lc code=end


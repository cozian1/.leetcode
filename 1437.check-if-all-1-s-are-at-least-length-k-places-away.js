/*
 * @lc app=leetcode id=1437 lang=javascript
 *
 * [1437] Check If All 1's Are at Least Length K Places Away
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let flag=true;
    let last;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            if(last == null){
                last=i;
            }else{
                if((i-last-1) < k){
                    flag=false;
                    break;
                }
            }
            // console.log(i-last-1);
            last=i;
        }
    }
    console.log(flag);
    return flag;
};

kLengthApart([1,0,0,1,0,1],2);
// @lc code=end


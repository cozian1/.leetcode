/*
 * @lc app=leetcode id=682 lang=javascript
 *
 * [682] Baseball Game
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let arr=[];
    let sum=0;
    for(i of operations){
        if(i==="+")
            arr.push(arr.at(-1)+arr.at(-2));
        else if(i==="D")
            arr.push(arr.at(-1)*2);
        else if(i==="C")
            arr.pop();
        else
            arr.push(parseInt(i));
    }
    arr.forEach((item)=>{sum+=item;});
    console.log(arr);
    return sum;

};
// @lc code=end


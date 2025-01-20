/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const pair=new Map([[')','('],['}','{'],[']','[']]);
    let list=['(','{','['];
    let box=[];
    for(i of s){
        if(list.includes(i)){
            box.push(i);
        }else{
            if(box.at(-1)!==pair.get(i)){
                return false;
            }
            box.pop();
        }
    }
    return box.length===0;
};
console.log(isValid("()"));
// @lc code=end


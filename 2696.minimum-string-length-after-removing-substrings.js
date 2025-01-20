/*
 * @lc app=leetcode id=2696 lang=javascript
 *
 * [2696] Minimum String Length After Removing Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let stac=[];
    let map=new Map([['B','A'],['D','C']]);
    
    for(let i of s){
        if(stac.length !=0 && stac.at(-1)==map.get(i)){
            stac.pop();
        }else{
            stac.push(i);
        }
    }
    return stac.length;
};
//console.log(minLength("ABFCACDB"));
// @lc code=end


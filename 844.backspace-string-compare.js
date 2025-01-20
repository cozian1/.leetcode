/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function removes(s) {
    while(s.includes("#")){
        let temp=s.replace(/[^#]#/g,"");
        if(s===temp) break;
        s=temp;
    }
    return s.replace(/#/g,"");
}
var backspaceCompare = function(s, t) {
    s=removes(s);
    t=removes(t);
    console.log(s,t);
    return s===t;
};
console.log(backspaceCompare("a##c","#a#c"));
console.log(backspaceCompare("du###vu##v#fbtu","du###vu##v##fbtu"));
//console.log(backspaceCompare("a##c","#a#c"));

// @lc code=end


/*
 * @lc app=leetcode id=1805 lang=javascript
 *
 * [1805] Number of Different Integers in a String
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    let data= word.split(/\D/).filter((a)=> a != '');
    data.forEach((item,index,arr) =>{ 
        arr[index]=parseInt(item);
        if(parseInt(item)==Infinity){
            let x=0;
            while(x,item.length && item[x]=='0') x++;
            arr[index]=item.substring(x);
        }
    });
    return new Set(data).size;
};

// @lc code=end


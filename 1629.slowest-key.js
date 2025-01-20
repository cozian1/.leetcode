/*
 * @lc app=leetcode id=1629 lang=javascript
 *
 * [1629] Slowest Key
 */

// @lc code=start
/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let max=releaseTimes[0];
    let char=keysPressed[0];
    for(let i=1;i<releaseTimes.length;i++){
        let temp=releaseTimes[i]-releaseTimes[i-1];
        if(temp > max){
            max=temp;
            char=keysPressed[i];
        }else if(temp==max && char<keysPressed[i]){
            char=keysPressed[i];
        }
    }
    console.log(char);
    return char;
};
//slowestKey([12,23,36,46,62],"spuda");//a
//slowestKey([23,34,43,59,62,80,83,92,97],"qgkzzihfc");//q

// @lc code=end


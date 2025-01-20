/*
 * @lc app=leetcode id=1710 lang=javascript
 *
 * [1710] Maximum Units on a Truck
 */

// @lc code=start
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1]-a[1]);
    let unit=0;
    console.log(boxTypes);
    for(let i of boxTypes){
        if(truckSize-i[0] < 0){
            unit+=truckSize*i[1];
            break;
        }else{
            truckSize-=i[0];
            unit+=i[0]*i[1];
        }
    }
    return unit;
};
// @lc code=end


/*
 * @lc app=leetcode id=2133 lang=javascript
 *
 * [2133] Check if Every Row and Column Contains All Numbers
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    let n=matrix.length,f=true;
    for(let i=0;i<n;i++){
        let rows=new Set(),cols=new Set();
        for (let j = 0; j < n; j++) {
            rows.add(matrix[i][j]);
            cols.add(matrix[j][i])            
        }
        if(rows.size!=n || cols.size!=n){
            f=false;
        }
    }
    return f;
};
// @lc code=end


/*
 * @lc app=leetcode id=1352 lang=javascript
 *
 * [1352] Product of the Last K Numbers
 */

// @lc code=start
let list;
let product;
let pv;

var ProductOfNumbers = function() {
    list=[];
    product=[];
    pv=0;
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    list.push(num);
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    if(product.length!=list.length){
        product=[...list];
        for(let i=product.length-2;i>=0;i--){
            product[i]*=product[i+1];
        }
    }
    
    return product.at(-k);
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
// @lc code=end


/*
 * @lc app=leetcode id=2273 lang=javascript
 *
 * [2273] Find Resultant Array After Removing Anagrams
 */

// @lc code=start

const primechar={'a': 2, 'b': 3, 'c': 5, 'd': 7, 'e': 11, 'f': 13, 'g': 17, 'h': 19, 'i': 23, 'j': 29, 'k': 31,
    'l': 37, 'm': 41, 'n': 43, 'o': 47, 'p': 53, 'q': 59, 'r': 61, 's': 67, 't': 71, 'u': 73, 'v': 79,
    'w': 83, 'x': 89, 'y': 97, 'z': 101};

/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    for(let i=1;i<words.length;i++){
        //if(countWord(words[i-1])==countWord(words[i])){
        if(compair(words[i-1],words[i])){
            words.splice(i,1);
            i--;
        }
        //console.log(words,words.length);
    }
    return words;
};
/**
 * @param {string} word1
 * @param {string} word2
*/
var compair=(word1,word2)=>{
    let map1=mapper(word1),
        map2=mapper(word2),flag=true;
    for (const i of new Set([...word1.split(''),...word2.split('')])){
        if(!((map1.has(i) && map2.has(i)) && map1.get(i)==map2.get(i))){
            flag= false;
            break;
        }
    }
    return flag;
}
/**
 * @param {string} word
*/
var mapper=(word)=>{
    let map=new Map();
    for (const i of word.split('')) {
        map.has(i)?map.set(i,map.get(i)+1):map.set(i,1);
    }
    return map;
}
/**
 * @param {string} word
 * @return {number}
 */
var countWord=(word)=>{
    let sum=1;
    
    console.log(word.split('').sort());
    for(let i of word.split('')){
        sum*=primechar[i];
    }
    console.log(sum);
    return sum;
}
// @lc code=end

//removeAnagrams(["yvwvxeyejy","yyvveywjxe"]);//,"vevewjyxyy","jyxyvwyvee","eyvyyevjxw"])
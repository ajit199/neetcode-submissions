class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {};
        for (let str of strs) {
            let sortedS = str.split("").sort().join("");
            if (!obj[sortedS]) {
                obj[sortedS] = [];
            }
            obj[sortedS].push(str);
        }
        return Object.values(obj);
    }
}

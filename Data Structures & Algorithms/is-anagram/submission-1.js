class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const firstWordLettersObj = {};
        const secondWordLettersObj = {};
        for (let char of s) {
            if (firstWordLettersObj[char]) {
                firstWordLettersObj[char]++;
            } else {
                firstWordLettersObj[char] = 1;
            }
        }

        for (let char of t) {
            if (secondWordLettersObj[char]) {
                secondWordLettersObj[char]++;
            } else {
                secondWordLettersObj[char] = 1;
            }
        }

        for (const key in firstWordLettersObj) {
            if (firstWordLettersObj[key] !== secondWordLettersObj[key]) {
                return false;
            }
        }

        return true;
    }
}

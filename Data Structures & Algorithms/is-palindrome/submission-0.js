class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphaNumeric(s) {
        return (s >= "a" && s <= "z") || (s >= "A" && s <= "Z") || (s >= "0" && s <= "9");
    }

    isPalindrome(s) {
        let newStr = "";
        for (let str of s) {
            if (this.isAlphaNumeric(str)) {
                newStr += str.toLowerCase();
            }
        }

        return newStr === newStr.split("").reverse().join("")
    }
}

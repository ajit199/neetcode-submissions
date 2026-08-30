class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphaNumeric(s) {
        return (s >= "a" && s <= "z") || (s >= "A" && s <= "Z") || (s >= "0" && s <= "9");
    }

    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            if (l < r && !this.isAlphaNumeric(s[l])) {
                l++;
                continue;
            }

            if (r > l && !this.isAlphaNumeric(s[r])) {
                r--;
                continue;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            l++;
            r--;
        }
        return true;
    }
}

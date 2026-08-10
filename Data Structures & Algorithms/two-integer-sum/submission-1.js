class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i = 0;
        let j = 1;
        while (j < nums.length) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            } else {
                if (j === nums.length - 1) {
                    j = i + 2;
                    i++;
                } else {
                    j++;
                }
            }
        }
        //     for (let i = 0; i < nums.length; i++) {
        //         for (let j = i + 1; j < nums.length; j++) {
        //             if (nums[i] + nums[j] === target) {
        //                 return [i, j];
        //             }
        //         }
        //     }

        //    return [-1,-1];
    }
}

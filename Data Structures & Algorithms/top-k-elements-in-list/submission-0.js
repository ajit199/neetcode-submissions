class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {};
        for (let num of nums) {
            if (obj[num]) {
                obj[num]["count"]++;
            } else {
                obj[num] = { count: 1, num };
            }
        }
        const sorted = Object.values(obj).sort((a, b) => b.count - a.count);
        return sorted.map((item)=> item.num).slice(0, k);
    }
}

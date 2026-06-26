class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        let temp = Array.from(new Set(nums));
        temp.sort((a, b) => a - b);

        let maxLen = 1;
        let curr = 1;

        for (let i = 1; i < temp.length; i++) {
            if (temp[i] === temp[i - 1] + 1) {
                curr++;
            } else {
                curr = 1;
            }
            maxLen = Math.max(maxLen, curr);
        }

        return maxLen;
    }
}


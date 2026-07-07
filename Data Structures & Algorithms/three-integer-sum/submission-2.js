class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const seen = new Set(); // stores stringified triplets we've already added
        let res = [];

        for (let idx = 0; idx < nums.length - 2; idx++) {
            let l = idx + 1, r = nums.length - 1;

            while (l < r) {
                let sum = nums[idx] + nums[l] + nums[r];

                if (sum === 0) {
                    let triplet = [nums[idx], nums[l], nums[r]];
                    let key = JSON.stringify(triplet); // e.g. "[-1,-1,2]"

                    if (!seen.has(key)) {
                        seen.add(key);
                        res.push(triplet);
                    }

                    l++;
                    r--;
                } else if (sum > 0) {
                    r--;
                } else {
                    l++;
                }
            }
        }

        return res;
    }
}
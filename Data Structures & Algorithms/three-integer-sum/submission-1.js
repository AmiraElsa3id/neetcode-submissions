class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = []

        // MISTAKE 1: nums.sort() with no comparator does lexicographic (string) sorting,
        // e.g. 10 would come before 2. Need a numeric comparator.
        nums.sort((a, b) => a - b)

        for (let idx = 0; idx < nums.length - 2; idx++) {
            // (loop bound nums.length-2 is fine since nums.length-1 also works,
            // but -2 avoids a pointless final iteration where l===r immediately)

            if (idx > 0 && nums[idx] === nums[idx - 1]) continue; // correctly skips duplicate first elements

            // MISTAKE 2: l used to start at 0, which meant it could point to
            // elements *before* idx. l must start right after idx so that
            // idx < l < r always holds, and the idx/l/r collision checks
            // become unnecessary.
            let l = idx + 1, r = nums.length - 1;

            while (l < r) {
                // MISTAKE 3 (removed code): the old `if(l==idx) l++` / `if(r==idx) r--`
                // patches are no longer needed at all now that l starts at idx+1 —
                // l and r can never equal idx.

                let sum = nums[idx] + nums[l] + nums[r];

                if (sum === 0) {
                    res.push([nums[idx], nums[l], nums[r]]);

                    // MISTAKE 4: previously you `break`-ed here, abandoning the search
                    // for any other valid pairs for this idx. Instead, advance both
                    // pointers inward to keep looking.
                    l++;
                    r--;

                    // MISTAKE 5: no duplicate-skipping for l/r after a match, which
                    // would cause the same triplet to be pushed multiple times.
                    // Skip past repeated values on both sides before continuing.
                    while (l < r && nums[l] === nums[l - 1]) l++;
                    while (l < r && nums[r] === nums[r + 1]) r--;

                } else if (sum > 0) {
                    r--;
                } else {
                    l++;
                }
            }
        }

        return res
    }
}
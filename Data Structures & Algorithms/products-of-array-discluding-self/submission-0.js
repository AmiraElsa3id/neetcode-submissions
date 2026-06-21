class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let prefix = [];
        let suffix = [];
        let res = [];

        // prefix[i] = product of all elements to the LEFT of i (excludes nums[i])
        let product = 1;
        for (let i = 0; i < n; i++) {
            prefix.push(product);
            product *= nums[i];
        }

        // suffix[i] = product of all elements to the RIGHT of i (excludes nums[i])
        product = 1;
        for (let i = n - 1; i >= 0; i--) {
            suffix[i] = product;
            product *= nums[i];
        }

        for (let i = 0; i < n; i++) {
            res.push(prefix[i] * suffix[i]);
        }

        return res;
    }
}


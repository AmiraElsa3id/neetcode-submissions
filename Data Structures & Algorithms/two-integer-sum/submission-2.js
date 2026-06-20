class Solution {
    twoSum(nums, target) {
        if (nums.length <= 1) {
            return [];
        }
        
        let i = 0;
        let j = 1;
        
        while (i < nums.length - 1) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            } else if (j == nums.length - 1) {
                i++;
                j = i + 1;
            } else {
                j++;
            }
        }
        
        return [];
    }
}

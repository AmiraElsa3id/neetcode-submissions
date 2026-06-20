class Solution {
    twoSum(nums, target) {
        let map = new Map();
        let complement
        for(let i= 0 ;i<nums.length ;i++){
            complement=target-nums[i] ;
            if(map.has(complement)){
                return [map.get(complement), i]
            }else{
                map.set(nums[i],i);
            }
        }
        return[]
}
}
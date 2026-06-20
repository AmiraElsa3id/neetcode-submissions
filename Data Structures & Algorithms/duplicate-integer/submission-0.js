class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hashMap = new Map()
        for(const n of nums){
            if (hashMap.has(n)){
                return true
            }
            else{
                hashMap.set(n , 1)
            }
        }
        return false    
    }
}
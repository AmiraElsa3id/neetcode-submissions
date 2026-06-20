class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let m = new Map();
        let res = [];
        //map of frequency 
        for(let num of nums){
            if(m.has(num)){
                m.set(num,m.get(num)+1)
            }
            else{
                m.set(num,1)
            }
        }

        while(k--){
            let max = -1001;
            let key;
            for(let [k,v] of m ){
                if(v > max){
                    key = k;
                    max = v
                }
            }
            // pushing into array 
            res.push(key);
            // deleting key after pushing 
            m.delete(key)
        }

        return res
    }
}

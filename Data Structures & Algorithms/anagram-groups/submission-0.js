class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let m = new Map()
        for(const str of strs)  {

            let code = str.split("").sort().join();
            if(m.has(code)){
                m.get(code).push(str)
            }
            else{
                m.set(code,[str])
            }

        }
        let res = []
        for(const[k,v] of m){
            res.push(v)
        }
        return res
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length ==0) return 0;
            let temp = Array.from(new Set(nums));
            temp.sort((a,b)=>a-b);
                console.log(temp)
            let res = new Map();
            let curr = temp[0] ;
            let arr =[temp[0]];
            for(let i = 1 ; i<temp.length;i++  ){
                if(curr == (temp[i] - 1)){
                    arr.push(temp[i])
                }
                else{
                    res.set(arr.length,arr)
                    arr=[]
                    arr.push(temp[i])
                }
                curr= temp[i]
            }
            if(!arr.lenght){
                res.set(arr.length,arr)
            }
            console.log(res)
            let final= Array.from(res.keys())
            final.sort((a,b)=>b-a);
            console.log(final[0])

            return final[0];
        
    }
}


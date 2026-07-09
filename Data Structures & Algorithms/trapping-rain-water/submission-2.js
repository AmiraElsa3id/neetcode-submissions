class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

       //prefix
       let pre =[height[0]]
       for(let i =1 ;i<height.length;i++){
            pre[i]=Math.max(pre[i-1],height[i])
       }


       //suffix
       let suff =[height[height.length-1]]
       for(let i =1 ;i<height.length;i++){
            suff[i]=Math.max(height[height.length-i-1],suff[i-1])
       }

       suff.reverse()

       console.log(pre)
       console.log(suff)

       let sum=0;
        for(let i =0 ;i<height.length;i++){
             sum += Math.min(suff[i],pre[i])-height[i];
               
        }
        return sum 
        
    }
}

class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        function max(start, end){
            let m=0;
            for(;start<end;start++){
                if(height[start]>m){
                    m = height[start];
                    // console.log(height[start])
                    // console.log(m)
                }
            }
            console.log(m)
            return m;

        }
        let sum = 0;
        for(let i =0 ;i<height.length;i++){
            let temp = Math.min(max(0,i),max(i+1,height.length))-height[i];
            console.log(temp)
            if(temp>=0){
                sum+=temp
            }   
        }
        return sum 
        
    }
}

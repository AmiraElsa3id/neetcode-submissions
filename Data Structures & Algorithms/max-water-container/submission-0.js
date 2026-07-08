class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 1;
        let r= heights.length;
        let max=0;
        while(l<r){
            let temp = (r-l)*Math.min(heights[l-1],heights[r-1]);

            max= Math.max(temp,max);

            if(heights[l-1] <= heights[r-1]){
                l++
            }
            else{
                r--
            }

        }

        return max;

    }
}

class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
      let arr =[];
        if(position.length==1){
            return 1
        }
        for (let i = 0; i < position.length; i++) {
            arr.push([position[i], speed[i]]);
        }

        arr.sort((a, b) => b[0] - a[0]);
            let s = [arr[0]];
            for (let i = 1; i < arr.length; i++) {
                 let t1= (target - s[s.length-1][0])/s[s.length-1][1]
                 let t2= (target - arr[i][0])/arr[i][1]

                 if(!(t2<=t1)) s.push(arr[i])

            }
               return s.length
    }
}

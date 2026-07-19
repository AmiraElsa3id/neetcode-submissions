class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

//[38,30,36,35,40]
//[4,1,2,1,0]
        let count = 0;
        let res =[];
        let flag;
        for(let i = 0;i<temperatures.length;i++ ){
            flag= false;
            for (let j= i+1;j<temperatures.length;j++ ){
                if (temperatures[j]>temperatures[i]){
                    res.push(j-i)
                    flag=true;
                    break;
                }
            }
            if(!flag){
                res.push(0)
            }
        }

    console.log(res)
    return res

    }
}

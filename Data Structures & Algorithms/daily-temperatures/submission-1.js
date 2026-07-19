class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

//[38,30,36,35,40]
//[4,1,2,1,0]
      
    //     for(let i = 0;i<temperatures.length;i++ ){
           
    //     }

    // console.log(res)
    // return res



    //preprocessing using monotonic stack 
    //next grater element
  let s = [temperatures.length-1];
  let ans =[0];

    for(let i = temperatures.length-2 ; i>=0 ; i-- ){

        while(s.length!=0 && temperatures[s[s.length-1]] <= temperatures[i] ){
            s.pop()
        }

        if(s.length){
            ans.push(s[s.length-1]-i)
        }
        else{
            ans.push(0)
        }

    s.push(i)
    }

console.log(ans)
    return ans.reverse();

    }
}

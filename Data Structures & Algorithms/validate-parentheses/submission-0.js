class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let stack=[s[0]]
        for(let i =1 ; i<s.length;i++){
           if(s[i] ==')' && stack[stack.length-1] =='('){
            stack.pop();
            
           }
          else if(s[i]==']' && stack[stack.length-1]=='['){
            stack.pop();
        
           }
         else if(s[i]=='}' && stack[stack.length-1]=='{'){
            stack.pop();
           }
           else{
            stack.push(s[i])
           }
           console.log(stack)
        }
        if (stack.length==0){
            return true
        }
        else{
            return false
        }

    }
}

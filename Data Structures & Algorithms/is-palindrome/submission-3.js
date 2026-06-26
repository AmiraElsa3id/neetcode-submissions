class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(s.length==0){
            return true;
        }
         s = s.replace(/[^a-zA-Z0-9]/g, "");
        // s=s.replaceAll("/{}/g","")
        let i=0 ;
        let j = s.length-1;

        while(i<j){
            if(s[i].toLowerCase() != s[j].toLowerCase()){
                return false
            }
            i++
            j--
        }
        return true;
    }
}

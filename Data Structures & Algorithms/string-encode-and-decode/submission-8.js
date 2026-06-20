class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        //hi
        let encodedStr ="";
        let n = strs.length;
        let header=`${n}\t`
        //2\t
        encodedStr=header+strs.join('\t')
        // console.log(encodedStr);
        //2\thi
        return encodedStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedStr ;
        let n = str.length;
        
        decodedStr=str.split('\t')
        if(decodedStr[0]==0){
            return []
        }
        // console.log(decodedStr);
        return decodedStr.splice(1)
    }
}
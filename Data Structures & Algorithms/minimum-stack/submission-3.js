class MinStack {
    // arr =[]
    // min=null
    constructor() {
         this.arr =[]    
         this.min=[]  
    }

//["MinStack", "push", 5, "push", 0, "push", 2, "push", 4, "getMin", "pop", "getMin", "pop", "getMin"]

//[5,0]
//[5,0]


    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.min.length==0){
            this.min.push(val)
        }
        else this.min.push(Math.min(this.min[this.min.length-1],val))
        this.arr.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
      this.arr.pop()//[1,0]
        this.min.pop()//[1,0]

        console.log("min: ",this.min)
        console.log("arr: ",this.arr)
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[this.arr.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
       return this.min[this.min.length-1]
    }
}

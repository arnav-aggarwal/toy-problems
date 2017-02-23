class Stack extends Array {
  constructor() {
    super();
  }

  peek() {
    return this[this.length - 1];
  }

  isEmpty() {
    return !this.length;
  }
  
  sort() {
    const tempStack = new Stack();
    const len = this.length;
    
    for(let i = 0; i < len - 1; i++) {
      let largest = this.peek();
  
      for(let j = i; j < len; j++) {
        const thisNum = this.pop();
  
        if(thisNum > largest) {
          largest = thisNum;
        }
  
        tempStack.push(thisNum);
      }
  
      this.push(largest);
      let processedLargest = false;
  
      while(!tempStack.isEmpty()) {
        const thisNum = tempStack.pop();
        if(!processedLargest && thisNum === largest) {
          processedLargest = true;
          continue;
        }
  
        this.push(thisNum);
      }
    }
  }
}

module.exports = Stack;

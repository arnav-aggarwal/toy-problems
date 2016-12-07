class Stack extends Array {
  constructor() {
    super();
  }

  peek() {
    return this[this.length - 1];
  }
}

function sortStack(stack) {
  const tempStack = new Stack();
  for(let i = 0; i < stack.length - 1; i++) { //2
    let largest = stack.peek(); //2

    for(let j = i; j < stack.length; j++) { //2
      const thisNum = stack.pop(); //2

      if(thisNum > largest) {
        largest = thisNum;
      }

      tempStack.push(thisNum);
    }

    let processedLargest = false;
    stack.push(largest);

    while(tempStack.length) {
      const thisNum = tempStack.pop();
      if(!processedLargest && thisNum === largest) {
        processedLargest = true;
        continue;
      }

      stack.push(thisNum);
    }
  }
}

/*
Postfix-Notation Calculator
Postfix notation (also known as Reverse Polish notation) is an alternative way of representing algebra expressions. For example, take the following expression:

2 + 5 * 8
This “normal” notation that we see everyday is called infix notation. Infix notation places its math operators in-between the numbers.

Infix notation also has order of operations. The previous example will be interpreted as 2 + (5 * 8), because multiplication comes before addition. This makes it difficult to write a program to parse infix expressions.

In contrast, postfix notation is much easier to parse, albeit it looks weird at first. Postfix notation places math operators after the numbers. For example, the previous infix example can be re-written in postfix notation like this:

2 5 8 * +
This expression should be read from left to right, one number / operator at a time. In doing so, you must keep a stack of numbers that wait to be operated on.

Here is a run-through of parsing this example:

inputs remaining      number stack           action
2 5 8 * +                                    begin
5 8 * +               2                      push 2 to stack
8 * +                 2 5                    push 5 to stack
* +                   2 5 8                  push 8 to stack
+                     2 40                   pop two numbers off the stack, multiply, push result to stack
                      42                     pop two numbers off the stack, add, push result to stack
                      42                     Done! 42 is the answer.
Implement this algorithm in your solution.

Examples
Input                 Output
inputs:
"1 5 8 * +"           41
inputs:
"1 5 8 + *"           13
inputs:
"100 2 / 25 +"        75
 */

function calculate (inputs) {
  const compute = {
    '+' : stack => stack.push(stack.pop() + stack.pop()),
    '-' : stack => stack.push(- (stack.pop() - stack.pop())),
    '*' : stack => stack.push(stack.pop() * stack.pop()),
    '/' : stack => stack.push((stack.pop() / stack.pop()) ** -1)
  };

  return inputs.split(' ')
    .map(x => isNaN(Number(x)) ? x : Number(x))
    .reduce(function(numbers, item) {
      if(isNaN(Number(item))) compute[item](numbers);
      else numbers.push(item);
      return numbers;
    }, [])[0];
}

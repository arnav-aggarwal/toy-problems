/**
Balanced Brackets
Given a string, return true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets [].

Examples
Input Output
"(x + y) - (4)" true
"(x + y) - (4)" true
"(((10 ) ()) ((?)(:)))" true
"[{()}]"  true
"(50)(" false
"[{]}"  false
 */

const isBalanced = str => {
  const arr = [];
  const open = '([{', close = ')]}';
  const matches = {')': '(', ']': '[', '}':'{'};
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    open.includes(char) && arr.push(char);
    if(close.includes(char) && matches[char] !== arr.pop()) {
      return false;
    }
  }
  return !arr.length;
}

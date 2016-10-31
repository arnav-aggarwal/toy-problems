/**
Alphabet Inventory
Given an alphabet and a string of text, write a method that tallies the count of each letter defined in said alphabet (case insensitive), then return the result of this tally.

Examples
Input:
alphabet | text
"aBc" "aabbccdd"
Output:
"a:2,b:2,c:2"

Input:
alphabet | text
"x" "Racer X is my friend :)"
Output
"x:1"

Input:
alphabet | text
"123" "o hai"
Output:
"no matches"
*/

function alphaCount (alphabet, text) {
  const alph = text.toLowerCase().split('').reduce((obj, char) => {
    obj[char] = obj[char] + 1 || 1;
    return obj;
  }, {});
  
  return alphabet.toLowerCase().split('').reduce((str, char) => {
    return str += alph[char] ? `${char}:${alph[char]},` : ''
  }, '').slice(0, -1) || 'no matches';
}

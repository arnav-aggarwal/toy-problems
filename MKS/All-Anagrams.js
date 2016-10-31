//Solved

/**
All Anagrams
Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

Parameters:

string (required) - a string of characters.

Examples
Input
string: "abc"
Output
[ "abc", "acb", "bac", "bca", "cab", "cba" ]
*/

function allAnagrams (str, inProgress = ['']) {
  const arr = str.split('');
  const results = [];
  
  arr.forEach((letter, i) => {
    const currentResults = [];
    const lettersRemaining = [...arr];
    lettersRemaining.splice(i, 1);

    inProgress.forEach((subStr) => {
      currentResults.push(subStr + letter);
        if(lettersRemaining.length) {
           results.push(...allAnagrams(lettersRemaining.join(''), currentResults));
        } else {
          results.push(subStr + letter);
        }
    });
  });
  
  const finalResult = [];
  results.forEach(str => finalResult.includes(str) || finalResult.push(str));
  return finalResult;
}

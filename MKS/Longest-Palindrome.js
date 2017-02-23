/*
Longest Palindrome
Implement a function that finds the longest palindrome in a given string. For example, in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. Count whitespaces as valid characters. Other palindromes in the above string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).

Examples
Input Output
string:
"aibohphobia" => "aibohphobia"
string:
"My dad is a racecar athlete" => "a racecar a"
 */

function longestPalindrome(str) {
  const indices = {};
  str.split('').forEach((ch, i) => {
    indices[ch] = indices[ch] || [];
    indices[ch].push(i);
  });
  
  return Object.values(indices).reduce((longestPal, indexSet) => {
    for(let i = 0; i < indexSet.length - 1; i++) {
      for(let j = i + 1; j < indexSet.length; j++) {
        let m, n;
        let isPal = true;
        
        for(m = indexSet[i], n = indexSet[j]; m < indexSet[j]; m++, n--) {
          if(str[m] !== str[n]) {
            isPal = false;
           break;
          }
        }
        
        if(!isPal) continue;
        let thisPal = str.slice(indexSet[i], indexSet[j] + 1);
        longestPal = thisPal.length > longestPal.length ? thisPal : longestPal;
      }
    }
    
    return longestPal;
  }, '');
}

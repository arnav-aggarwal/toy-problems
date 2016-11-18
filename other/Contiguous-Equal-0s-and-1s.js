/**
 * HackerRank question
 * 
 * Write a function that will take a string of 0's and 1's as input.
 * Example:
 *
 * '10011'
 *
 * The output should be the number of substrings that have an equal
 * number of 0's and 1's, with all 0's continuous and all 1's continuous.
 * Examples:
 *
 * '10011' => 3: 10, 01, 0011
 * '10001' => 2: 10, 01
 * '10101' => 4: 10, 01, 10, 01
 *
 * 5 < s.length < 50000
 *
 * TODO: Optimize. 
 */

function count(s) {
  let count = 0;
  
  for(let i = 2; i <= s.length; i += 2) {
    for(let j = 0; j <= s.length - i; j++) {
      const str = s.slice(j, j + i);
      
      const firstChar = str.charAt(0);
      if(str.lastIndexOf(firstChar) !== str.length / 2 - 1) {
        continue;
      }
      
      const secondChar = firstChar === '0' ? '1' : '0';
      if(str.indexOf(secondChar) === str.length / 2) {
        count++;
        j += i / 2 - 1;
      }
    }
  }
  
  return count;
}

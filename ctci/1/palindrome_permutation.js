/**
 * Cracking the Coding Interview: 1.4 Palindrome Permutation
 *
 * O(n)
 */

function palindromePermutation(str) {
  if(str === '') {
    return false;
  }
  
  const obj = {};
  for(let i = 0; i < str.length; i++) {
    const thisChar = str.charAt(i).toLowerCase();
    obj[thisChar] = obj[thisChar] + 1 || 1;
  }
  
  delete obj[' '];
  
  let oddCount = 0;
  const values = Object.values(obj);
  
  for(let i = 0; i < values.length; i++) {
    if(values[i] % 2) {
      oddCount++;
      if(oddCount > 1) {
        return false;
      }
    }
  }
  
  return true;
}

module.exports = palindromePermutation;

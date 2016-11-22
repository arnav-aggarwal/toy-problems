/**
 * Cracking the Coding Interview: 1.6 String Compression
 *
 * Note: Input is only lowercase or capital letters
 * 
 * O(n)
 */

function stringCompression(str) {
  const arr = [];
  let currentChar = str.charAt(0);
  let count = 1;

  for(let i = 1; i < str.length; i++) {
    const thisChar = str.charAt(i);
    if(thisChar === currentChar) {
      count++;
    } else {
      arr.push(currentChar, count);
      if(arr.length >= str.length) {
        return str;
      }

      count = 1;
      currentChar = thisChar;
    }
  }

  arr.push(currentChar, count);

  return arr.length < str.length ? arr.join('') : str;
}

module.exports = stringCompression;

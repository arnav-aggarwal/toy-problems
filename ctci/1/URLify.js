/**
 * Cracking the Coding Interview: 1.3 URLify
 *
 * O(n)
 */

/**
 * Replace all spaces in a string with '%20'.
 * User is only meant to input one argument, the string.
 * @param {String | String Array} strArr: the string to URLify. This is the
 *                         only argument the user should input.
 * @param {Number} lastIndex: the last index to start searching for spaces
 * @param {Number} replaceStart: the index to start replacing characters
 * @param {Number} iterationsLeft: the number of recursive calls to perform
 */
function URLify(strArr, lastIndex = strArr.length - 1, replaceStart = lastIndex, iterationsLeft) {
  if(strArr === '') {
    return '';
  }
  
  if(typeof strArr === 'string') {
    strArr = strArr.split('');
  }
  
  if(iterationsLeft === undefined) {
    let totalSpaces = 0;
    for(let i = 0; i < strArr.length; i++) {
      if(strArr[i] === ' ') {
        totalSpaces++;
      } 
    }

    iterationsLeft = totalSpaces / 3 - 1;
  }

  let charEncountered = false;
  let currentIndex;
  let charIndex;
  
  for(let i = lastIndex; i >= 0; i--) {
    const thisChar = strArr[i];
    if(!charEncountered) {
      if(thisChar !== ' ') {
        charEncountered = true;
        charIndex = i;
      }
      
      continue;
    }
    
    if(thisChar === ' ') {
      currentIndex = i;
      break;
    }
  }
  
  let j = 0;
  for(let i = charIndex; i > currentIndex; i--, j++) {
    strArr[replaceStart - j] = strArr[i];
  }
  
  let index = replaceStart - j;
  strArr[index--] = '0';
  strArr[index--] = '2';
  strArr[index--] = '%';
  
  if(iterationsLeft) {
    return URLify(strArr, currentIndex, index, iterationsLeft - 1);
  }
  
  return strArr.join('');
}

module.exports = URLify;

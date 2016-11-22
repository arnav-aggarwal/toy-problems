/**
 * Cracking the Coding Interview: 1.3 URLify
 *
 * O(n)
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

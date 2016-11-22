function URLify(strArr, lastIndex = strArr.length - 1, replaceStart = lastIndex) {
  if(strArr === '') {
    return '';
  }
  
  if(typeof strArr === 'string') {
    strArr = strArr.split('');
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
  
  if(strArr.indexOf(' ') !== -1) {
    return URLify(strArr, currentIndex, index);
  }
  
  return strArr.join('');
}

module.exports = URLify;

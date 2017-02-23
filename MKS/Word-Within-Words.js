/*
Words within Words
Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long.

Examples
Input Output
wordList:
[ "gray", "grays", "ray", "rays", "strays" ]  "grays"
 */

//n squared:
// function nestedWordCount(list) {
//   return list.reduce((nests, word) => {
//     let count = 0;
//     list.forEach(wordInList => {
//       if(word.includes(wordInList)) count++;
//     });
//     return count > nests[0] ? [count, word] : nests;
//   }, [0, ''])[1];
// }

//Linear
function nestedWordCount(list) {
  const wordObj = {};
  list.forEach(word => wordObj[word] = true);
  
  const nests = list.reduce((nestCount, word) => {
    let count = 0;
    for(let checkLength = 2; checkLength < word.length; checkLength++) {
      for(let startIndex = 0; startIndex < word.length; startIndex++) {
        const slicedWord = word.slice(startIndex, startIndex + checkLength);
        if(slicedWord.length === checkLength && wordObj[slicedWord]) {
          count++;
        }
      }
    }
    
    nestCount[word] = count;
    return nestCount;
  }, {});
  
  return Object.entries(nests).reduce((mostNests, word) => {
    return word[1] > mostNests[1] ? word : mostNests;
  })[0];
}

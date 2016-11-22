//Imlement an algorithm to determine if a string has all unique
//characters. What if you cannot use additional data structures?
//
//TODO: Implement bit vector solution

//Using set: O(n)
function isUnique1(str) {
  const chars = new Set();
  for(let i = 0; i < str.length; i++) {
    const thisChar = str.charAt(i);
    if(chars.has(thisChar)) {
      return false;
    }

    chars.add(thisChar);
  }

  return true;
}

//Using bit vector: 
function isUnique2(str) {
  let bitVector;
}

//Without additional data structures: O(n*log(n))
require('../../../data-structures/algorithms/quickSort.js');
require('../../../data-structures/algorithms/binarySearch.js');

function isUnique3(str) {
  const sorted = str.split('').quickSort(); //O(n*log(n))
  for(let i = 1; i < sorted.length; i++) {  //O(n)
    if(sorted[i - 1] === sorted[i]) {
      return false;
    }
  }

  return true;
}

module.exports = {
  isUnique1,
  isUnique2,
  isUnique3
};

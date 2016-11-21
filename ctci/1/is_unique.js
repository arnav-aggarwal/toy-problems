//Imlement an algorithm to determine if a string has all unique
//characters. What if you cannot use additional data structures?

///////////////////////////////////////////////////////////////////////////////
Array.prototype.quickSort = function(start = 0, end = this.length) {
  //Use arrow function to maintain proper 'this' binding
  const swap = (i, j) => {
    const temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }

  if(end - start < 2) {
    return;
  }

  const lastIndex = end - 1;
  const pivot = this[lastIndex];
  let j = start;

  for(let i = start; i < lastIndex; i++) {
    if(this[i] < pivot) {
      swap(i, j++);
    }
  }

  swap(j, lastIndex);

  this.quickSort(start, j);
  this.quickSort(j + 1, end);

  return this;
}

/**
 * Search a sorted array for an item. Return the index of the item,
 * or -1 if it is not found.
 * @param  {Number | String} item: the item to look for
 * @param  {Number} start: for internal use
 * @param  {Number} end: for internal use
 * @return {Number}       The index of the item, or -1
 */
Array.prototype.binarySearch = function(item, start = 0, end = this.length - 1) {
  console.log(start, end)
  if(item < this[start] || item > this[end]) {
    return -1;
  }

  if(start > end) {
    return -1;
  }

  const middleIndex = Math.floor((start + end) / 2);
  const middleItem = this[middleIndex];

  if(item === middleItem) {
    return middleIndex;
  }

  if(item < middleItem) {
    return this.binarySearch(item, start, middleIndex - 1);
  }

  return this.binarySearch(item, middleIndex + 1, end);
}

///////////////////////////////////////////////////////////////////////////////
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

console.log(isUnique1('abc'));
console.log(isUnique1('abca'));

//Using bit vector: 
function isUnique2(str) {
  let bitVector;
}

//Without additional data structures: O(n*log(n))
function isUnique3(str) {
  const sorted = str.split('').quickSort(); //O(n*log(n))
  for(let i = 1; i < sorted.length; i++) {  //O(n)
    if(sorted[i - 1] === sorted[i]) {
      return false;
    }
  }

  return true;
}

console.log(isUnique3('dkv'));
console.log(isUnique3('dkc'));
console.log(isUnique3('dkaa'));

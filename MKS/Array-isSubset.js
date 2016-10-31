/**
Array isSubset
Create a function that takes two arrays and determine whether the second array is a subset of the first array. Arrays will only contain primitive values.

Examples
Input Output
[ 1, 2, 3, 4 ], [] 2, 3, 4 ] => true
[ 2, 2, 2, 3, 4 ], [ 2, 4, 3 ] => true
[ 2, 3, 3, "a" ], [ 3, 3, 3, "a" ] => false
 */

const isSubset = (arr, sub) => sub.reduce((a, b) => {
    if(arr.includes(b)) {
      arr[arr.indexOf(b)] = {};
      return a;
    }
    return false;
  }, true);

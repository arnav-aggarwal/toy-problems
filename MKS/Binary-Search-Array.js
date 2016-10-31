/**
Binary Search Array
Given a sorted array of integers, find the index of a target value using a binary search algorithm.

A binary search finds an item in a sorted array by repeatedly choosing a middle value and dividing the search interval in half. The initial interval includes the whole array. If the value of the target value is less than the middle value of the interval, then the next interval will be the lower half of the current interval. If the value of the target value is greater than the middle value, then the next interval will be the upper half. The search process repeats until the middle value is equal to the target value, or the search interval is empty.


Note:
Your function should return -1 for target values not in the array. 

Do NOT use Array.prototype.indexOf in your solution. What would be the fun in that?




Parameters:


array (required) - an array.

target (required) - an integer value.

Examples
[ 5 ], 4 => -1
[ 11, 12, 13, 14, 15 ], 11 => 0
[ 11, 12, 13, 14, 15 ], 12 => 1
[ 11, 12, 13, 14, 15 ], 13 => 2
[ 11, 12, 13, 14, 15 ], 14 => 3
[ 11, 12, 13, 14, 15 ], 15 => 4
[ 11, 12, 13, 14, 15 ], 16 => -1
 */

const binarySearch = (arr, target) => {
  if(target < arr[0] || target > arr[arr.length - 1]) return -1;
  
  const arr1 = arr.slice(0, arr.length / 2);
  const arr2 = arr.slice(arr.length / 2, arr.length);
  
  if(arr2[0] === target) return arr1.length;
  if(arr2[0] > target) return binarySearch(arr1, target);
  return arr1.length + binarySearch(arr2, target);
}

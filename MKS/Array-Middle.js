//Need to optimize

/**
Array Middle
Given an array of negative/positive integers, return the element in the center position of the array.

If the array has an even number of elements, return the average of the two middle elements instead.

Examples
Input                 Output
[ 200, 5, 100 ]       5
[ 10, 20, 30, 40 ]    25
 */

const middle = (arr, mid = Math.floor(arr.length / 2)) => arr.length % 2 ? arr[mid] : (arr[mid] + arr[mid - 1]) / 2;

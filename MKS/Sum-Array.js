/*
Sum Array
Given an array of numbers, calculate the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum.
 */

function sumArray(arr) {
  let max = arr[0];
  for(let i = 0; i < arr.length; i++) {
    max = Math.max(max, Math.max(max, arr.slice(i, arr.length + 1).reduce((a, b) => a + b)));
    for(let j = i + 1; j < arr.length + 1; j++) {
      max = Math.max(max, arr.slice(i, j).reduce((a, b) => a + b));
    }
  }
  
  return max;
}

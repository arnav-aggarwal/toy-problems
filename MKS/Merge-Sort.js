/*
Merge Sort
Implement a function that sorts an array of numbers using the “mergesort” algorithm.

Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N as a set of N “sublists” of length 1, which are considered to be sorted. Adjacent sublists are then “merged” into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
after the first merge, and so on.)

This can be implemented using either a recursive (“top-down”) or an iterative (“bottom-up”) approach.
 */

function mergeSort(arr) {
  const half = arr.length / 2;
  const split = [arr.slice(0, half), arr.slice(half, arr.length)]
    .map(half => half.length <= 1 ? half : mergeSort(half));

  const sorted = [];
  const arr1 = split[0];
  const arr2 = split[1];
  
  while(arr1.length || arr2.length){
    if(arr1.length && arr2.length) {
      sorted.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
    } else {
      sorted.push(arr1.length ? arr1.shift() : arr2.shift());
    }
  }

  return sorted;
}

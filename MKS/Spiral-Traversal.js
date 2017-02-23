/*
Spiral Traversal
Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
and prints out every value found, but in a spiral from the upper left in to the center.
 */

function spiralTraversal(matrix) {
  const output = [];
  while(matrix.length) {
    while(matrix[0].length) output.push(matrix[0].shift());
    matrix.shift();
    matrix.forEach(row => output.push(row.pop()));
    const lastRow = matrix[matrix.length - 1] || 0;
    while(lastRow.length) output.push(lastRow.pop());
    matrix.pop();
    matrix.reverse().forEach((__, index) => {
      output.push(matrix[matrix.length - 1 - index].shift());
    });
  }
  
  return output.filter(x => x);
}

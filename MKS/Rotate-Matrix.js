/*
Rotate Matrix
Write a function that rotates a NxN matrix 90 degrees clockwise.
A matrix, also called a 2-D array, is simply an array of arrays of values.

2x2 MATRIX EXAMPLE:

[ [1, 2],
[3, 4] ]

Rotated:

[ [3, 1],
[4, 2] ]

4x4 MATRIX EXAMPLE:

[ [ 1, 2, 3, 4],
[ 5, 6, 7, 8],
[ 9, “A”,”B”,”C”],
[“D”,”E”,”F”,”G”] ]

Rotated:

[ [“D”, 9, 5, 1],
[“E”, “A”, 6, 2],
[“F”,”B”, 7, 3],
[“G”,”C”, 8, 4] ]

EXTRA CREDIT
- Make your function operate on rectangular matrices (MxN rather than NxN).
- Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)

Important note:
In mathematics, and generally in CS, matrices are identified as m-by-n, where m is the number of rows and n
is the number of columns. So an [i][j] address in a matrix will be i places down, and j places over.
This usually matches the way arrays are addressed in code, but keep in mind that it differs from use in
geometry and computer graphics, where coordinates of the form (x,y) are usually x units over, and y units down.
 */

//can pass in a direction (1, -1) for any rectangular matrix
function rotate(mat) {
  const mat2 = mat[0].map((i)=>[]);
  
  for(let i = 0; i < mat.length; i++){
    for(let j = 0; j < mat[0].length; j++){
      mat2[j][mat.length - 1 - i] = mat[i][j];
    }
  }
  
  return mat2;
};

function rotateMatrix(m, dir) {
  return dir === -1 ? rotate(rotate(rotate(m))) : rotate(m);
}

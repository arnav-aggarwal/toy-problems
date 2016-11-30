/**
 * Cracking the Coding Interview: 1.8 Zero Matrix
 * 
 * Time: O(m * n)
 * Space: O(m + n)
 */

function zeroMatrix(mat) {
  if(!Array.isArray(mat)) {
    throw new Error('Input must be an array');
  }

  const rowZeros = new Set();
  const columnZeros = new Set();

  for(let i = 0; i < mat.length; i++) {
    for(let j = 0; j < mat[i].length; j++) {
      if(mat[i][j] === 0) {
        rowZeros.add(i);
        columnZeros.add(j);
      }
    }
  }

  const rowZerosArray = Array.from(rowZeros);
  rowZerosArray.forEach(function(rowNum) {
    mat[rowNum].forEach((_, colNum) => mat[rowNum][colNum] = 0);
  });

  const columnZerosArray = Array.from(columnZeros);
  columnZerosArray.forEach(function(columnNum) {
    mat.forEach(row => row[columnNum] = 0);
  });

  return mat;
}

module.exports = zeroMatrix;

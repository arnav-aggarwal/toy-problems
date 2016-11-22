/**
 * Cracking the Coding Interview: 1.7 Rotate Matrix
 *
 * Constraints: Do in place
 *
 * O(n^2) where n is # of rows
 */

function rotateMatrix(mat) {
  for(let j = 0; j < Math.floor(mat.length / 2); j++) {
    const lastIndex = mat.length - 1 - j;
    for(let i = 1 + j; i < mat.length - j; i++) {
      let temp1 = mat[i][lastIndex];
      mat[i][lastIndex] = mat[j][i];
      let temp2 = mat[lastIndex][lastIndex - i + j];
      mat[lastIndex][lastIndex - i + j] = temp1;
      temp1 = mat[lastIndex - i + j][j];
      mat[lastIndex - i + j][j] = temp2;
      mat[j][i] = temp1;
    }
  }

  return mat;
}

module.exports = rotateMatrix;

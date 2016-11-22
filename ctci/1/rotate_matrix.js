/**
 * Cracking the Coding Interview: 1.7 Rotate Matrix
 *
 * Constraints: Do in place
 *
 * O(n^2) where n is # of rows
 */

function rotateMatrix(mat) {
  const lastIndex = mat.length - 1;
  for(let j = 0; j < 1; j++) {
    for(let i = 1; i < mat.length; i++) {
      let temp1 = mat[i][lastIndex];  //temp1 = 22
      mat[i][lastIndex] = mat[0][i];  //22 = 02
      let temp2 = mat[lastIndex][lastIndex - i];  //temp2 = 20
      mat[lastIndex][lastIndex - i] = temp1;  //20 = temp1 = 22
      temp1 = mat[lastIndex - i][0];  //temp1 = 00
      mat[lastIndex - i][0] = temp2;  //00 = temp2 = 20
      mat[0][i] = temp1;  //02 = temp1 = 00
    }
  }

  return mat;
}

module.exports = rotateMatrix;

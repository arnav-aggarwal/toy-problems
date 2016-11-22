/**
 * Cracking the Coding Interview: 1.7 Rotate Matrix
 *
 * Constraints: Do in place
 *
 * O(n^2) where n is # of rows
 */

function rotateMatrix(mat) {
  const lastIndex = mat.length - 1;
  for(let i = 1; i < mat.length; i++) {
    let temp1 = mat[i][lastIndex];  //temp1 = 22
    mat[i][lastIndex] = mat[0][i];  //22 = 02
    let temp2 = mat[lastIndex][lastIndex - i];  //temp2 = 20
    mat[lastIndex][lastIndex - i] = temp1;  //20 = temp1 = 22
    temp1 = mat[lastIndex - i][0];  //temp1 = 00
    mat[lastIndex - i][0] = temp2;  //00 = temp2 = 20
    mat[0][i] = temp1;  //02 = temp1 = 00
  }

  // //go one square at a time
  // for(let i = 0; i < Math.floor(mat.length / 2); i++) {
  //   //iterate over the row
  //   // console.log(i);

  //   const firstIndex = i + 1;
  //   const lastIndex = mat.length - i - 1;
  //   for(let j = firstIndex; j <= lastIndex; j++) {
  //     // const thisIndex = 
  //     console.log('Indices: ', firstIndex, lastIndex, j);
  //     // console.log(j);
  //     //move everything in place:
  //     //temp1 = top[end]
  //     let temp1 = mat[j][lastIndex - i];
  //     console.log(temp1);
  //     //right[j] = top[j]
  //     mat[j][lastIndex] = mat[i][j];
  //     //temp2 = bottom[end - j]
  //     let temp2 = mat[lastIndex - i][lastIndex - j];
  //     console.log(temp2);

  //     //bottom right = temp1
  //     mat[lastIndex - i][lastIndex - j] = temp1;
  //     //temp1 = bottom[j]
  //     temp1 = mat[lastIndex - j][i];
  //     console.log(temp1);

  //     //bottom[j] = temp2
  //     mat[lastIndex - j][j] = temp2;
  //     //top[j] = temp1
  //     mat[firstIndex][firstIndex + j] = temp1;
  //   }
  // }

  return mat;
}

module.exports = rotateMatrix;

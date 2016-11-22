/**
 * Cracking the Coding Interview: 1.7 Rotate Matrix
 *
 * Constraints: Do in place
 *
 * O(n^2) where n is # of rows
 */

function rotateMatrix(mat) {




  
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

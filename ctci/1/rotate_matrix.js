/**
 * Cracking the Coding Interview: 1.7 Rotate Matrix
 *
 * Constraints: Do in place
 *
 * O(n^2) where n is # of rows
 */

function rotateMatrix(mat) {
  const totalLayers = Math.floor(mat.length / 2);
  for(let layer = 0; layer < totalLayers; layer++) {
    const lastIndex = mat.length - 1 - layer;
    for(let forwardIterator = layer + 1; forwardIterator < mat.length - layer; forwardIterator++) {
      const reverseIterator = lastIndex - forwardIterator + layer;

      let temp1 = mat[forwardIterator][lastIndex];
      mat[forwardIterator][lastIndex] = mat[layer][forwardIterator];

      let temp2 = mat[lastIndex][reverseIterator];
      mat[lastIndex][reverseIterator] = temp1;

      temp1 = mat[reverseIterator][layer];
      mat[reverseIterator][layer] = temp2;
      
      mat[layer][forwardIterator] = temp1;
    }
  }

  return mat;
}

module.exports = rotateMatrix;

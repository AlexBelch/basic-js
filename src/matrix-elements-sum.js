const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let counter = 0;

  matrix.forEach((line, index1, array) => {
    line.forEach((value, index2) => {
      if (index1 === 0 || array[index1 - 1][index2] !== 0) {
        counter = counter + value;
      }
    });
  });

  return counter;
}

module.exports = {
  getMatrixElementsSum,
};

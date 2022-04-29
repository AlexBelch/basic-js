const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];

  matrix.forEach((elementArr) => {
    result.push(
      elementArr.map((element) => {
        return 0;
      })
    );
  });

  const lengthI = matrix.length - 1;

  for (let i = 0; i <= lengthI; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const lengthJ = matrix[i].length - 1;

      result[i][j] =
        (j < lengthJ && matrix[i][j + 1] ? 1 : 0) +
        (j < lengthJ && i < lengthI && matrix[i + 1][j + 1] ? 1 : 0) +
        (i < lengthI && matrix[i + 1][j] ? 1 : 0) +
        (j > 0 && i < lengthI && matrix[i + 1][j - 1] ? 1 : 0) +
        (j > 0 && matrix[i][j - 1] ? 1 : 0) +
        (i > 0 && j > 0 && matrix[i - 1][j - 1] ? 1 : 0) +
        (i > 0 && matrix[i - 1][j] ? 1 : 0) +
        (i > 0 && j < lengthJ && matrix[i - 1][j + 1] ? 1 : 0);
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};

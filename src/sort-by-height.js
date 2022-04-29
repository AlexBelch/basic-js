const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrInd1 = [];
  let newArr = arr
    .filter((element, index) => {
      if (element === -1) {
        arrInd1.push(index);
        return false;
      }
      return true;
    })
    .sort(function (a, b) {
      return a - b;
    });

  arrInd1.forEach((element) => {
    newArr.splice(element, 0, -1);
  });

  return newArr;
}

module.exports = {
  sortByHeight,
};

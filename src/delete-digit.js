const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = "" + n;
  const arr = str.split("");
  let max = 0;

  let newArr = arr.map((item, index, arr) => {
    const temp = [...arr];
    temp.splice(index, 1);
    return temp.join("");
  });

  newArr.forEach((item) => {
    if (+item > max) {
      max = +item;
    }
  });

  return max;
}

module.exports = {
  deleteDigit,
};

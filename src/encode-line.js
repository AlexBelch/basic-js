const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split("");
  const result = [];
  let temp = 0;

  arr.forEach((element, index) => {
    if (element === arr[index + 1]) {
      temp === 0 ? (temp = 2) : (temp = temp + 1);
    } else {
      result.push(temp === 0 ? element : temp + element);
      temp = 0;
    }
  });

  return result.join("");
}

module.exports = {
  encodeLine,
};

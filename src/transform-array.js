const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  const transformArr = [];

  for (let i = 0; i < arr.length; i = i + 1) {
    if (arr[i] === "--discard-prev") {
      if (
        transformArr.length > 0 &&
        arr[i - 1] === transformArr[transformArr.length - 1]
      )
        transformArr.pop();
      continue;
    }
    if (arr[i] === "--double-prev") {
      if (
        transformArr.length > 0 &&
        arr[i - 1] === transformArr[transformArr.length - 1]
      )
        transformArr.push(arr[i - 1]);
      continue;
    }
    if (arr[i] === "--discard-next") {
      i = i + 1;
      continue;
    }
    if (arr[i] === "--double-next") {
      if (arr[i + 1] !== undefined) transformArr.push(arr[i + 1]);
      continue;
    }

    transformArr.push(arr[i]);
  }

  return transformArr;
}

module.exports = {
  transform,
};

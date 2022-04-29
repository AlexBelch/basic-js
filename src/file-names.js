const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  return names.map((file1, index1, sourceArr1) => {
    let counter = 1;

    sourceArr1.forEach((file2, index2, sourceArr2) => {
      if (file2 === file1 && index2 !== index1) {
        sourceArr2[index2] = `${sourceArr2[index2]}(${counter})`;
        counter = counter + 1;
      }
    });

    return sourceArr1[index1];
  });
}

module.exports = {
  renameFiles,
};

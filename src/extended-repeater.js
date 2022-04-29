const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes,
    separator = "+",
    addition,
    additionRepeatTimes,
    additionSeparator = "|",
  } = options;

  let result = "";

  if (
    (addition && additionRepeatTimes) ||
    addition === false ||
    addition === null
  ) {
    let temp = (addition + additionSeparator).repeat(additionRepeatTimes);
    temp = temp.slice(0, -additionSeparator.length);
    if (repeatTimes) {
      result = (str + temp + separator).repeat(repeatTimes);
      result = result.slice(0, -separator.length);
    } else {
      result = str + temp;
    }
  } else if (addition || addition === false || addition === null) {
    if (repeatTimes) {
      result = (str + addition + separator).repeat(repeatTimes);
      result = result.slice(0, -separator.length);
    } else {
      result = str + addition;
    }
  } else {
    if (repeatTimes) {
      result = (str + separator).repeat(repeatTimes);
      result = result.slice(0, -separator.length);
    } else {
      result = str;
    }
  }

  return result;
}

module.exports = {
  repeater,
};

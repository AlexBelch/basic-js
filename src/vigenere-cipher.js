const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }

  getKey(char, key, j, flag) {
    if (flag === 1)
      return String.fromCharCode(
        ((char.charCodeAt(0) + key.toUpperCase().charCodeAt(j) - 2 * 65) % 26) +
          65
      );
    if (flag === 2)
      return String.fromCharCode(
        ((char.charCodeAt(0) + key.toLowerCase().charCodeAt(j) - 2 * 97) % 26) +
          97
      ).toUpperCase();
    if (flag === 3)
      return String.fromCharCode(
        90 -
          ((25 - (char.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26)
      );
    if (flag === 4)
      return String.fromCharCode(
        122 -
          ((25 - (char.charCodeAt(0) - key.toLowerCase().charCodeAt(j))) % 26)
      );
  }

  templateFunc(text, key, flag) {
    if (!text || !key) {
      throw new Error("Incorrect arguments!");
    }

    let result = "";

    for (let i = 0, j = 0; i < text.length; i++) {
      let char = text.charAt(i);

      if (char === " " || !char.match(/[a-zA-Z]/i)) {
        result += char;
        continue;
      }

      if (char === char.toUpperCase()) {
        result += this.getKey(char, key, j, flag === 1 ? 1 : 3);
      } else {
        result += this.getKey(char, key, j, flag === 1 ? 2 : 4);
      }

      j = ++j % key.length;
    }

    return this.direction ? result : result.split("").reverse().join("");
  }

  encrypt(text, key) {
    return this.templateFunc(text, key, 1);
  }

  decrypt(text, key) {
    return this.templateFunc(text, key, 2);
  }
}

module.exports = {
  VigenereCipheringMachine,
};

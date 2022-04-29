const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  currentChain: [],
  getLength() {
    return this.currentChain.length;
  },
  addLink(value) {
    if (!value) {
      this.currentChain.push(`( ${String(value)} )`);
    } else {
      this.currentChain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (
      typeof position === "number" &&
      position > 0 &&
      position % 1 === 0 &&
      position < this.getLength()
    ) {
      this.currentChain.splice(position - 1, 1);
      return this;
    } else {
      this.currentChain = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.currentChain.reverse();
    return this;
  },
  finishChain() {
    const chain = this.currentChain.join("~~");
    this.currentChain = [];
    return chain;
  },
};

module.exports = {
  chainMaker,
};

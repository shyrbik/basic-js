const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArray: [],

  getLength() {
    return this.chainArray.length;
  },

  addLink(value) {
    this.chainArray.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (position < 1) {
      this.chainArray = []
      throw Error("low value of position");
    }
    if(!Number.isInteger(position)){
      throw Error("position is not a number");
      this.chainArray = []
    }
    if (this.getLength() < position){
    throw Error("position is out of range");
    this.chainArray = []
    }

    this.chainArray.splice(position - 1, 1);
    //splice - первая величина - номер элемента массива с которого начинаем, вторая -
    //количество элементов массива для удаления
    return this;
  },

  reverseChain() {
    this.chainArray.reverse();
    return this;
  },

  finishChain() {
    let finishString = this.chainArray.join('~~');
    //clean array
    this.chainArray = [];
    return finishString;
  }
};

module.exports = chainMaker;

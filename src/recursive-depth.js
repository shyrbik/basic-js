const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {
    
    let result = 1;

    for (let i = 0; i < array.length; i ++) {
      
      let arrayDeep = 1;
      
      if (array[i] instanceof Array) {
        arrayDeep = arrayDeep + this.calculateDepth(array[i]);
        
        if (arrayDeep > result) {
          result = arrayDeep;}
      }
      
    }

    return result;
  }
};

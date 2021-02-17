const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let strArray = [];

  for (let i = 0; i < arr.length; i++) {

      switch (arr[i]){
      case "--double-next" :
        strArray.push(arr[i + 1]);
        break;

        case "--discard-next" : i++;
        break;

        case "--double-prev" :
        strArray.push( strArray (strArray.length-1));
        break;

        case "--discard-prev" :
        strArray.pop();
        break;

        default :
        strArray.push(arr[i]);
        break;

    }
  }

  return strArray;

  
  
  
  
};

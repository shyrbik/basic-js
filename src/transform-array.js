const CustomError = require("../extensions/custom-error");


module.exports = function transform(arr) {
    let strArray = [];

    if (!Array.isArray(arr)) throw Error;

  for (let i = 0; i < arr.length; i++) {

      switch (arr[i]){
        case "--double-next" :
          if(arr[i + 1] !== undefined)
          strArray.push(arr[i + 1]);
        break;

        case "--discard-next" :
          if(arr[i + 1] !== undefined)
            i++;
        break;

        case "--double-prev" :
          if(arr[i - 1] !== undefined && arr[i - 2] !== "--discard-next")
            strArray.push( strArray[i-1]);
        break;

        case "--discard-prev" :
          if(arr[i - 1] !== undefined && arr[i - 2] !== "--discard-next")
            strArray.pop();
        break;

        default :
        strArray.push(arr[i]);
        break;

    }
  }

  return strArray;
};
 
};

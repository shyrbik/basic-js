const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //repeatTimes sets the number of repetitions of the str;
  let repeatTimes = options.repeatTimes || 1;
  //additionRepeatTimes sets the number of repetitions of the addition;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  //separator is a string separating repetitions of the str;
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';
  let addition;

  if(options.addition === undefined) {
    addition = '';
  } else {
    addition = options.addition + '';
  }

  if (str === null || str === false){
    strToRepeat = str + '';
  }
  else {
    strToRepeat = str.toString();
  }

  //let strToRepeat = (str === null || str === false) ? str + '' : str.toString();
  let additionRepeatedStr = `${addition}${additionSeparator}`.repeat(additionRepeatTimes).slice(0, -additionSeparator.length);
  let repeatedStr = `${strToRepeat}${additionRepeatedStr}${separator}`.repeat(repeatTimes).slice(0, -separator.length);
  return repeatedStr;
};
  

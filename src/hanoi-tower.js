const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
//  минимальное число ходов, необходимое для решения головоломки, равно 2n − 1, где n — число дисков[
  let turns = Math.pow(2, disksNumber) - 1;
  let seconds = turns / turnsSpeed * 3600;
  let result = {
    turns, seconds
  };
  seconds = Math.floor(seconds);
  turns = Math.floor(turns);
  result.turns = turns;
  result.seconds = seconds;
  
  return result;
 };

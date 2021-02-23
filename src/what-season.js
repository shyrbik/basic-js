const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let nameOfSeason = "";
  if (!date) {
    nameOfSeason = 'Unable to determine the time of year!';
}
  else {
  let countMonth = 0;
    
  if(isNaN(date))
    throw new Error();
    
  try {
  countMonth = date.getMonth();
  }
  catch (e) {
    throw new Error(e);
  }
//Метод getMonth() возвращает месяц указанной даты по местному времени,
//нумерация месяцев начинается с нуля для первого месяца в году.

if (countMonth <= 1 || countMonth == 11)
  nameOfSeason = "winter";
if (countMonth > 1 && countMonth <= 4)
  nameOfSeason = "spring";
if (countMonth > 4 && countMonth <= 7)
  nameOfSeason = "summer";
if (countMonth > 7 && countMonth <= 10)
  nameOfSeason = "autumn";
  }

return nameOfSeason;

};

const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let nameOfSeason = "";
  if (!date) {
    nameOfSeason = 'Unable to determine the time of year!';
}
  else {
  let countMonth = 0;
  
  try {
  countMonth = date.getMonth();
  }
  catch (e) {
    throw new Error(e);
  }
    
//Метод getMonth() возвращает месяц указанной даты по местному времени,
//нумерация месяцев начинается с нуля для первого месяца в году.

if (nameOfSeason <= 1 || nameOfSeason == 11)
  nameOfSeason = "winter";
if (nameOfSeason > 1 && nameOfSeason <= 4)
  nameOfSeason = "spring";
if (nameOfSeason > 4 && nameOfSeason <= 7)
  nameOfSeason = "summer";
if (nameOfSeason > 7 && nameOfSeason <= 10)
  nameOfSeason = "autumn";

  }

return nameOfSeason;

};

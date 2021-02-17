const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
   if(!members)
    return false;
  else {
  let secretName = [];
  for (let i = 0, j = 0; i < members.length; i++) {
    if((typeof members[i]) == "string"){
    secretName[j] = members[i].trim().toUpperCase()[0];
    j++;
    }

  }
  if (secretName.length != 0){
    let finalName ="";
    secretName.sort().forEach(element => {
      finalName = finalName + element;
    });

    return finalName;

  }

  else
  return false;

  }
  
  
};

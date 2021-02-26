const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {
 alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

 direct = true;

 constructor(direct = true) {
   this.direct = direct;
 }

/**    if (typeof message !== 'undefined') {
            throw new Error("Undefined of message value");
          }
    if (typeof key !== 'undefined') {
            throw new Error("Undefined of key value");
          } */

  //encrypt method accepts 2 parameters: message
  // (string to encode) and key (string-keyword).
  encrypt(message, key) {
    if (arguments.length < 2) {
      throw new Error('error in argument');
    }

    let ArrCharMessage = message.toUpperCase().split('');
    let ArrCharKey = key.toUpperCase().split('');

    let ArrCharMessageKey = [];
    let j = 0;
    for (let i = 0; i < ArrCharMessage.length; i++) {
      if (this.alphabet.includes(ArrCharMessage[i])) {
        ArrCharMessageKey[i] = [ArrCharMessage[i], ArrCharKey[j]];
        j++;
        if (j === ArrCharKey.length) {
          j = 0;
        }
      } else {
        ArrCharMessageKey[i] = ArrCharMessage[i];
      }
    }

    let ArrCharMessageDefend = [];
    for (let i = 0; i < ArrCharMessageKey.length; i++) {
      if (ArrCharMessageKey[i] instanceof Array) {
        let pos = (this.alphabet.indexOf(ArrCharMessageKey[i][0]) + this.alphabet.indexOf(ArrCharMessageKey[i][1])) % 26;
        ArrCharMessageDefend[i] = this.alphabet[pos];
      } else {
        ArrCharMessageDefend[i] = ArrCharMessageKey[i];
      }
    }

    if (!this.direct) {
      ArrCharMessageDefend.reverse();
    }

    return ArrCharMessageDefend.join('');
  }

  decrypt(message, key) {
    if (arguments.length < 2) {
      throw new Error('error in argument');
    }

    let ArrCharMessage = message.toUpperCase().split('');
    let ArrCharKey = key.toUpperCase().split('');

    let ArrCharMessageKey = [];
    let j = 0;
    for (let i = 0; i < ArrCharMessage.length; i++) {
      if (this.alphabet.includes(ArrCharMessage[i])) {
        ArrCharMessageKey[i] = [ArrCharMessage[i], ArrCharKey[j]];
        j++;
        if (j === ArrCharKey.length) {
          j = 0;
        }
      } else {
        ArrCharMessageKey[i] = ArrCharMessage[i];
      }
    }

    let ArrCharMessageDefend = [];
    for (let i = 0; i < ArrCharMessageKey.length; i++) {
      if (ArrCharMessageKey[i] instanceof Array) {
        let pos = (this.alphabet.indexOf(ArrCharMessageKey[i][0]) - this.alphabet.indexOf(ArrCharMessageKey[i][1]) + 26) % 26;
        ArrCharMessageDefend[i] = this.alphabet[pos];
      } else {
        ArrCharMessageDefend[i] = ArrCharMessageKey[i];
      }
    }

    if (!this.direct) {
      ArrCharMessageDefend.reverse();
    }

    return ArrCharMessageDefend.join('');
  }
}

module.exports = VigenereCipheringMachine;

const prompt = require('prompt-sync')();

let mysteryCode = (prompt("Enter 4-digit mystery code from 0 to 6, setter:"));
let userCode = "";

let countLetterNotPosition = 0;
let countLetterAndPosition = 0;
let numberTries = 0;

// let mysteryCode1 = mysteryCode[0];
// let mysteryCode2 = mysteryCode[0];
// let mysteryCode3 = mysteryCode[0];
// let mysteryCode4 = mysteryCode[0];

while (numberTries < 3) {

    userCode = (prompt("Enter 4-digit mystery code from 0 to 6, user:"));
//if () -- how to break out of program if user code is correct???
    //Find same letter different position;
    for (let i of userCode) {
        if (mysteryCode.includes(userCode[i])) {

            countLetterNotPosition += 1;
        } else {
            
        }
    }
    console.log("Number of same letter with not same position", countLetterNotPosition);


    //Find same letter same position;
    for (let i of userCode) {
        if (mysteryCode[i] == userCode[i]) {

            countLetterAndPosition += 1;
        } else {
            
        }
    }
    console.log("Number of same letter and same position", countLetterAndPosition);
numberTries +=1
}
console.log("game over!");


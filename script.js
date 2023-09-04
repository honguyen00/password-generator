// pseudocode
// ask for length (8 to 128)
// lowercase Y or N
// uppercase Y or N
// numeric Y or N
// spec char Y or N
// example: N Y Y N ==> availaleChar.concat(upperCase).concat(numeric)

// have all the availablechar, have the input length, for loop through the length, 
// choose char in availableChar through random index //

const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = lowerCase.toUpperCase();
const numeric = '0123456789';
const specChar = " !#$%&()*+,-./:;<=>?@[]^_`{|}~".concat(["\'" + "\"" + "\\"]);

var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var generated = "";
    var availaleChar = "";
    var len = window.prompt("Length of your password (between 8 and 128 characters): ");
    //checking for edge case
    //if input nothing
    if (!len) {
      window.alert("You need to input a length!");
      return;
    } 
    //if input is not a number
    else if (isNaN(len)) {
      window.alert("Please enter a number!");
      return;
    } 
    //if input is out of range
    else if (len < 8 || len > 128) {
      window.alert("Invalid number!")
      return;
    } else {
        var isLowerCase = window.confirm("Your password will include lowercase letters.");
        if (isLowerCase) {
          availaleChar = availaleChar.concat(lowerCase);
        }
        var isUpperCase = window.confirm("Your password will include uppercase letters.");
        if (isUpperCase) {
          availaleChar = availaleChar.concat(upperCase);
        }
        var isNumeric = window.confirm("Your password will include numbers.");
        if (isNumeric) {
          availaleChar = availaleChar.concat(numeric);
        }
        var isSpecChars = window.confirm("Your password will include special characters.");
        if (isSpecChars) {
          availaleChar = availaleChar.concat(specChar);
        }
        //checking that password must have at least one chosen type
        if (!isLowerCase && !isUpperCase && !isNumeric && !isSpecChars) {
          window.alert("Must select one type of characters!");
        } else {
          console.log(availaleChar);
          for (i=0; i < len; i++) {
            generated = generated.concat(availaleChar[Math.floor(Math.random()*availaleChar.length)]);
          }
        }
        return generated;
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password != "" && typeof(password) != 'undefined') {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

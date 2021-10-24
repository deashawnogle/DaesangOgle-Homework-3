// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = "!#$%&'()*+,`./:;<=>?@[\]^_{|}~";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  console.log ("button clicked");
    var passwordLength = prompt ("Please choose your length");
    var password = "";
    var chars = "";
    
    if ((passwordLength > 7)&&(passwordLength < 128)) {
      var passwordLength1 = parseInt(passwordLength);
    }
    else {alert ("Password length needs to be between 8 to 128")
    return;
    }
    
    var numberChars = confirm ("Do you want number?");
    var lowercaseChars = confirm ("Do you want lowercase?");
    var uppercaseChars = confirm ("Do you want uppercase?");
    var symbolsChars = confirm ("Do you want symbols?");

    if (!numberChars && !lowercaseChars && !uppercaseChars && !symbolsChars) {
      alert("choose at least one criteria")
      return;
    }

    if (numberChars) {
        chars += numbers
    };
    if (lowercaseChars) {
        chars += lowercase
    };
    if (uppercaseChars) {
        chars += uppercase
    };
    if (symbolsChars) {
        chars += symbols
    };

    for (var i = 0; i < passwordLength1; i++) {
      password += chars [Math.floor(Math.random() * chars.length)]
    }
    console.log (password)
    console.log (chars)
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getRandomLower () {
  return String.fromCharCode(97);
}
console.log(Math.floor(Math.random() * 26));


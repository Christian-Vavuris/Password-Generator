// PseudoCode
// Requested features - 
//   random length between 8 and 128 - DONE but getting an UNDEFINED error still 
//   choose between lowercase, uppercase, numeric, and special characters
//   Make an array of Digits
//   checkbox list of features to include
//   there can't be no character types selected
//   password needs to meet the selected criteria
//   password needs to display as an alert or bee written to the pageXOffset

// Assignment code here

// 
var randomLength = function (length) {
  var characters = Math.round(Math.random() * length);
  if (characters >= 8 && characters <= 128) {
    return characters;
  }
  else {
    randomLength(128)
  }
}

var randomNumber = function () {
  var number = Math.ceil(Math.random()*9)
  return number;
}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

randomLength(128);
console.log(randomLength(128));
console.log(randomNumber())
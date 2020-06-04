// PseudoCode
// Requested features - 
//   random length between 8 and 128 - DONE but getting an UNDEFINED error still 
//   choose between lowercase, uppercase, numeric, and special characters
//   Make functions that return a random uppercase, lowercase, number, or special character
//   checkbox list of features to include
//   there can't be no character types selected
//   password needs to meet the selected criteria
//   password needs to display as an alert or bee written to the pageXOffset

// Assignment code here


let uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let specialCharacter = ["!","@","#","$","%","^","&","*","(",")",":",";","<",">","?","/","~","`","-","_","+","=","|","[","]","{","}",]

let number = {"0","1","2","3","4","5","6","7","8","9"}

var randomLength = function (length) {
  var characters = Math.round(Math.random() * length);
  if (characters >= 8 && characters <= 128) {
    return characters;
  }
  else {
    randomLength(128)
  }
}

var generateRandomNumber = function () {

}

var generateRandomUppercase = function() {

}

var generateRandomLowercase = function() {

}

var generateRandomSpecialCharacter = function() {

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
console.log(uppercase)
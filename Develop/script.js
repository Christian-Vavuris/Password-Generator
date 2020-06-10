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

let zeroToNine = ["0","1","2","3","4","5","6","7","8","9"]


// Winow Alerts

var length = Number(window.prompt("How many characters would you like your password to be?"));
console.log(typeof(length))

var lower = window.confirm("Would you like your password to contain lowercase letters?");

var upper = window.confirm("Would you like your password to contain upprcase letters?");

var number = window.confirm("Would you like your password to contain numbers?");

var special = window.confirm("Would you like your password to contain special characters?")


// Picking one of the four values at random. Need to add For Loop.

var generateRandom = function() {
  var probability = Math.random() * 1;
  if (probability < .25 && (number)) {
    return generateRandomNumber();
  }
  else if (probability >= .25 && probability <.5 && (upper)){
    return generateRandomUppercase();
  }
  else if (probability >=.5 && probability <.75 && (lower)){
    return generateRandomLowercase();
  }
  else if (probability >=.75 && (special)) {
    return generateRandomSpecialCharacter();
  }
  else { return generateRandom() }
}


//  Functions to Generate a type of random character.  Still need to link them to the arrays. 

var generateRandomNumber = function() {
  if (number) {
    return zeroToNine[Math.floor(Math.random()*10)];
  }
  else {
    return null;
  }
}

var generateRandomUppercase = function() {
  if (upper) {
  return uppercase[Math.floor(Math.random()*26)];
}
  else {
    return null;
  }
}

var generateRandomLowercase = function() {
  if (lower) {
  return lowercase[Math.floor(Math.random()*26)];
}
  else {
    return null;
  }
}

var generateRandomSpecialCharacter = function() {
  if (special) {
    return specialCharacter[Math.floor(Math.random()*27)];
  }
  else {
    return null
  }
}

// here is where we run generateRandom n times and concatenate the results. 

var generatePassword = function () {
  var output = ""
  for (i=0; i<length; i++) {
    output = output + generateRandom();
  }
  return window.alert("Your password is " +output);

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

generateBtn.addEventListener("click", writePassword);


console.log(generatePassword())







// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var numericCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "@", "#", '"', "$", "%", ]

console.log(passwordLength);
console.log(letters);
console.log(numericCharacters);
console.log(specialCharacters);
console.log(letters.toUppercase);   

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  {window.confirm("Do you want to create a new password?");

  if 
(window.prompt("How many charactors should it to contain?")); 

if 
(includes.passwordLength(window.prompt("Do you want to include lowercase letters?")));
else
return;
}
}
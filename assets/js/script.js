// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(passwordLength) {
  // Arrays for character options for password
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
  var alphabetUppercase = alphabet.map(str => str.toUpperCase());
  var numericCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = ["!", "@", "#", '"', "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", "?"];
  var passwordLength = {
    from: 0,
    to: 128
  };
  // Concat of character options into one array
  var passwordCharacters = alphabet.concat(alphabetUppercase, numericCharacters, specialCharacters);

  console.log(alphabet);
  console.log(alphabetUppercase);
  console.log(numericCharacters);
  console.log(specialCharacters);
  console.log(passwordCharacters);
 
  //Random choosing of password characters
  
  window.prompt(("How many charactors should it to contain?"), "")
    if (passwordLength = Number)
    console.log("Password Length" + passwordLength);

  if
    (window.confirm("Do you want to include lowercase letters?"));
    console.log((Math.floor(Math.random() * alphabet.length)));
  
  if
    (window.confirm("Do you want to include uppercase letters?"));
    console.log((Math.floor(Math.random() * alphabetUppercase.length)))
 
  if
    (window.confirm("Do you want it to contain numbers?"));
    console.log((Math.floor(Math.random() * numericCharacters.length)))
  
    if
    (window.confirm("Do you want it to contain special characters"));
    console.log((Math.floor(Math.random() * specialCharacters.length)))
    
    var password = [];
    for (var i=0; i<128; i++) {
      password.push(Math.floor(Math.random() * passwordCharacters.length));
    }
  
    for (var i=8; i<passwordCharacters.length; i++) {
      password += passwordCharacters[i];
    }
    
    console.log(password);
  
  return password;
  }
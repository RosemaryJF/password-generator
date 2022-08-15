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

function generatePassword() {
  // Arrays for character options for password
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
  var alphabetUppercase = alphabet.map(str => str.toUpperCase());
  var numericCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = ["!", "@", "#", '"', "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", "?"];
  var passwordCharacters = alphabet.concat(alphabetUppercase, numericCharacters, specialCharacters);
  

  console.log(alphabet);
  console.log(alphabetUppercase);
  console.log(numericCharacters);
  console.log(specialCharacters);
  console.log(passwordCharacters);

  //Random choosing of password characters
  
  var passwordLength = window.prompt("Enter the number of characters you want it to be (between 8-128).");
    console.log(passwordLength);

  var lowercase = window.confirm("Do you want to include lowercase letters?");
    console.log(lowercase);
  
  var uppercase = window.confirm("Do you want to include uppercase letters?");
    console.log(uppercase);
  
  var numberCharacters = window.confirm("Do you want it to contain numbers?");
    console.log(numberCharacters);
  
  var specialLetters = window.confirm("Do you want it to contain special characters");
    console.log(specialLetters);

  if (lowercase && uppercase && numberCharacters && specialLetters) {
    Selection = passwordCharacters
    console.log(Selection);
  
    for (var i = 0; i < passwordLength; i++) {
      password.push(Math.floor(Math.random() * passwordLength.length));
        }
      }
  // if (passwordLength === Number) {
  //   userInput.push(Number);
  // };

  // if (lowercase === true) {
  //   userInput.push(alphabet);
  // };

  // if (uppercase === true) {
  //   userInput.push(alphabetUppercase);
  // };

  // if (numberCharacters === true) {
  //   userInput.push(numericCharacters);
  // };

  // if (specialLetters === true) {
  //   userInput.push(specialCharacters);
  // };

  // Concat of character options into one array
 


    
//   console.log(password);
  
  return Selection;
  }

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

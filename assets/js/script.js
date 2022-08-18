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
  var alphabet = ["abcdefghijklmnopqrstuvwxyz"];
  var alphabetUppercase = alphabet.map(str => str.toUpperCase());
  var numericCharacters = [1234567890];
  var specialCharacters = ["~'!@#$%^&*()_-+={}[]|<>,.:;?/"];
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

  if (passwordLength => 8 < 128);
    else (!passwordLength);

  for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += passwordCharacters.substring(randomNumber, randomNumber +1);
     }

  // if (lowercase && uppercase && numberCharacters && specialLetters)

  //   for (var i = 0; i < passwordLength; i++) {
  //     passwordCharacters.push(Math.floor(Math.random() * passwordLength.length));
  //     console.log(password);
  //     }
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
 


    
//   

  // Add event listener to generate button


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
  
  // Concat of character options into one array
  var charSet = alphabet.concat(alphabetUppercase, numericCharacters, specialCharacters);
  
  console.log(alphabet);
  console.log(alphabetUppercase);
  console.log(numericCharacters);
  console.log(specialCharacters);
  console.log(charSet);
  
  //Window prompts to decide what arrays are to be included in password generation.
  var passwordLength = window.prompt("Enter the number of characters you want the password to be (between 8-128).");
    if (passwordLength === true)
    console.log(passwordLength);
    else if (passwordLength === null) {
      console.log ("Password generation has been cancelled.");
      window.alert("You have chosen to cancel the password generation.");
      return;
    }
  
  var lowercase = window.confirm("Do you want to include lowercase letters?");
    if (lowercase === true) {
      console.log("Include lowercase alphabet")
    }
      else if (lowercase === false) {
        console.log ("Do not include lowercase alphabet");
      }

  var uppercase = window.confirm("Do you want to include uppercase letters?");
    if (uppercase === true) {
      console.log("Include uppercase alphabet")
    }
      else if (uppercase === false) {
        console.log ("Do not include uppercase alphabet");
      }

    var numberCharacters = window.confirm("Do you want it to contain numbers?");
    if (numberCharacters === true) {
      console.log("Include numeric characters")
    }
      else if (numberCharacters === false) {
        console.log ("Do not include numeric characters");
      }

  var specialLetters = window.confirm("Do you want it to contain special characters");
    if (specialCharacters === true) {
      console.log("include special characters")
    }
      else if (specialLetters === false) {
        console.log ("Do not include special characters");
      }


  
  // if (passwordLength => 8 < 128);
  //   else (!passwordLength);

    //Random choosing of password characters
    // var password = "";
    // for (var i = 0; i < passwordLength; i++) {
    //   //picks a character within charSet at index of random number
    //   password = charSet.setCodeAt(Math.floor(Math.random() * charSet.length));
    // }
    // return password;



  // var password = '';
  //   for (var i = 0; i < passwordLength; i++) {
  //     var passwordCharacters = Math.floor(Math.random() * passwordLength.length[i]);
  //     console.log(password);
  //    }
     

  // if (lowercase && uppercase && numberCharacters && specialLetters)

  //   for (var i = 0; i < passwordLength; i++) {
  //     passwordCharacters.push(Math.floor(Math.random() * passwordLength.length));
  //     console.log(password);
  //     }

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

  
 


    
//   

  // Add event listener to generate button
}

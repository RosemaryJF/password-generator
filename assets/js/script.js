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

//Function to generate password
function generatePassword() {
  
  // Arrays for character options for password
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var alphabetUppercase = alphabet.toUpperCase();
  var numericCharacters = 1234567890;
  var specialCharacters = "~'!@#$%^&*()_-+={}[]|<>,.:;?/";
  var userCharChoices = "";
  
  console.log(alphabet);
  console.log(alphabetUppercase);
  console.log(numericCharacters);
  console.log(specialCharacters);
  console.log(userCharChoices);
  
  //Window prompt to user to pick a password length and outcomes if not in desired range
  var passwordLength = window.prompt("Enter the number of characters you want the password to be (between 8-128).");
    console.log(passwordLength);
     
    if (passwordLength === null) {
      console.log ("Password generation has been cancelled.");
      window.alert("You have chosen to cancel the password generation.");
      return;
    }
      else if (passwordLength<8 || passwordLength>128) {
          window.alert("Your character unit choice was invalid. Please start again")
          return;
        }
  
  // Variables for window prompts and user choices.
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
    
    var numbers = window.confirm("Do you want it to contain numbers?");
    if (numbers === true) {
      console.log("Include numeric characters")
    }
      else if (numbers === false) {
        console.log ("Do not include numeric characters");
      }

  var specialChars = window.confirm("Do you want it to contain special characters");
    if (specialChars === true) {
      console.log("include special characters")
    }
      else if (specialChars === false) {
        console.log("Do not include special characters");
      }

  //If statement for when no characters are chosen
  if (!lowercase && !uppercase && !numbers && !specialChars) {
    console.log("Character selection null. Input needed.");
    window.alert("You must choose characters for your password. Password generation has been cancelled.");
  }

    //Else statements for all character set options
    else if (lowercase && uppercase && numbers && specialChars) {
      userCharChoices = alphabet + alphabetUppercase + numericCharacters + specialCharacters;
    }

    // Else statements for 3 character options
    else if (lowercase && uppercase && numbers) {
      userCharChoices = alphabet + alphabetUppercase + numericCharacters;
    }

    else if (lowercase && uppercase && specialChars) {
      userCharChoices = alphabet + alphabetUppercase + specialCharacters;
    }

    else if (lowercase && numbers && specialChars) {
      userCharChoices = alphabet + numericCharacters + specialCharacters;
    }

    else if (uppercase && numbers && specialChars) {
      userCharChoices = alphabetUppercase + numericCharacters + specialCharacters;
    }

    else if (numbers && specialChars) {
      userCharChoices = numericCharacters + specialCharacters;
    }

    // Else statements for 2 character choices
    else if (lowercase && specialChars) {
      userCharChoices = alphabet + specialCharacters;
    }

    else if (uppercase && specialChars) {
      userCharChoices = alphabetUppercase + specialCharacters;
    }

    else if (lowercase && uppercase) {
      userCharChoices = alphabet + alphabetUppercase;
    }

    else if (lowercase && numbers) {
      userCharChoices = alphabet + numericCharacters;
    }

    else if (uppercase && numbers) {
      userCharChoices = alphabetUppercase + numericCharacters;
    }

    // Else statements for only 1 character set option
    else if (lowercase) {
      userCharChoices = alphabet;
    }

    else if (uppercase) {
      userCharChoices = alphabetUpper;
    }

    else if (numbers) {
      userCharChoices = numericCharacters;
    }

    else if (specialCharacters) {
      userCharChoices = specialCharacters;
    }

  // Introduction of password var for password input
  var password = [];
    
  //For loop for randomising password characters based of user character choices.
  // AskBCS helped me figure out issues with my for loop. Have detailed issues encountered in README.
    for (i = 0; i < passwordLength; i++) {
      var passwordNumbers = Math.floor(Math.random() * userCharChoices.length);
      var passwordChars = userCharChoices.charAt(passwordNumbers);
      console.log(passwordChars);
      password.push(passwordChars);
  } console.log(password);

  //Joins the password characters and pushes them to the browser page
  return password.join("");
}

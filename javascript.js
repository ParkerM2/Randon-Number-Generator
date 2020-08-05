// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompts //
var charLength = parseInt(prompt("Between 8-128 characters, how many would you like?"));
var upCase = confirm("Would you like Upper Case letters?");
var lowCase = confirm("Would you like lower case letters?");
var numb = confirm("Would you like numbers?");
var sym = confirm("Would you like symbols?");


console.log(charLength);

// Functions for Generating random letters/symbols/numbers //

// **character code key on https://www.w3schools.com/html/html_charset.asp ** //

//  for letters * 26 + starting number on list, for numbers * 10 + starting number //

// reminder *** DRY CODE *** //


// generating password //


function generatePassword() {
    for (i = 0; i < charLength; i++) {

        // retrieving random lower case letter //
        if (lowCase === true) {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
        }
        
        // retrieving random upper case letter //
        else if (upCase === true) {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
            
        }

        // retrieving random number //
        else if (numb === true) {
            return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
            
        }
            
        // retrieving random symbol //
        else if (sym === true) {
            const symbols = '!@#$%^&*(){}[]=<>/,.';
            return symbols[Math.floor(Math.random() * symbols.length)];
        }
    }
}
    


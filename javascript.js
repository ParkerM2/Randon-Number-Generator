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
var charLength = prompt("Between 8-128 characters, how many would you like?");
var upCase = confirm("Would you like Upper Case letters?");
var lowCase = confirm("Would you like lower case letters?");
var numb = confirm("Would you like numbers?");
var sym = confirm("Would you like symbols?");




// Functions for Generating random letters/symbols/numbers //

// **character code key on https://www.w3schools.com/html/html_charset.asp ** //

//  for letters * 26 + starting number on list, for numbers * 10 + starting number //

// reminder *** DRY CODE *** //
// var = letters ["a", "b", "c"];

// generating password //


function generatePassword(writePassword) {
   
    for (var i = 0; i < charLength; i++) {

        if (upCase === true) {
            writeUpperCase();
            i++;
        }
        else if (upCase === false) {
        };
        
        if (lowCase === true) {
            writeLowerCase();
            i++;
        }
        else if (lowCase === false) {
        };
        if (numb === true) {
            writeRanNumber();
            i++;
        }
        else if (numb === false) {
        };
        if (sym === true) {
            writeRanSymbol();
            i++;
        }
        else if (sym === false) {
        };
    }
    
            function writeLowerCase() {
                var text = "";
                const lettersL = 'abcdefghijklmnopqrstuvxyz';
                text += lettersL[Math.floor(Math.random() * lettersL.length)];
                console.log(text);
                
            }

            function writeUpperCase() {
                var text = "";
                const lettersU = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
                text += lettersU[Math.floor(Math.random() * lettersU.length)];
                console.log(text);
                
            }

            function writeRanNumber() {
                var text = "";
                const numbers = '1234567789';
                text += numbers[Math.floor(Math.random() * 9)];
                console.log(text)
                
            }

            function writeRanSymbol() {
                var text = "";
                const symbols = '!@#$%^&*()';
                text += symbols[Math.floor(Math.random() * 10)];
                console.log(text)
            }
}


//         // lower case only
//         if (lowCase === true && upCase === false && numb === false && sym === false) {
//             writeLowerCase();
        
//         }

//         // lowercase, uppercase only
//         else if (lowCase === true && upCase === true && numb === false && sym === false) {
//             writeLowerCase();
//             writeUpperCase();
//             console.log(i)
//         }
            
//         // lowercase, uppercase, number only
//         else if (lowCase === true && upCase === true && numb === true && sym === false) {
//             writeLowerCase();
//             writeUpperCase();
//             writeRanNumber();
//         }
            
//         // lowercase, uppercase, number, symbol (all)
//         else if (lowCase === true && upCase === true && numb === true && sym === true) {
//             writeLowerCase();
//             writeUpperCase();
//             writeRanNumber();
//             writeRanSymbol();
//         }
            
//         // all false
//         else if (lowCase === false && upCase === false && numb === false && sym === false) {
//             alert("No input no password!")
//         }
            
//         // uppercase only
//         else if (lowCase === false && upCase === true && numb === false && sym === false) {
//             writeUpperCase();
//         }
            
//         // uppercase, number only
//         else if (lowCase === false && upCase === true && numb === true && sym === false) {
        
//         }

//         // uppercase, number, symbol only
//         else if (lowCase === false && upCase === true && numb === true && sym === true) {
        
//         }
        
//         // Uppercase, symbol only
//         else if (lowCase === false && upCase === true && numb === false && sym === true) {
        
//         }


//         // numb only
//         else if (lowCase === false && upCase === false && numb === true && sym === false) {
        
//         }

//         // numb, symb only
//         else if (lowCase === false && upCase === false && numb === true && sym === true) {
        
//         }
//         // symbol only
//         else if (lowCase === false && upCase === false && numb === false && sym === true) {
        
//         }

//     }
// }
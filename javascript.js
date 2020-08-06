// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.Value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompts //
var charLength = parseInt(prompt("Between 8-128 characters, how many would you like?"));

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


    
// function writeLowerCase() {
//     var text1 = "";
//     const lettersL = 'abcdefghijklmnopqrstuvxyz';
//     text1 += lettersL[Math.floor(Math.random() * lettersL.length)];
//     console.log(text1);
    
// }

// function writeUpperCase() {
//     var text2 = "";
//     const lettersU = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
//     text2 += lettersU[Math.floor(Math.random() * lettersU.length)];
//     console.log(text2);
// }

// function writeRanNumber() {
//     var text3 = "";
//     const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//     text3 += numbers[Math.floor(Math.random() * numbers.length)];
//     console.log(text3);
    
// }

// function writeRanSymbol() {
//     var text4 = "";
//     const symbols = '!@#$%^&*()';
//     text4 = symbols[Math.floor(Math.random() * 10)];
//     console.log(text4);
    
// }\
const lettersL = ["a", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m" ,"n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"] 
const lettersU = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]      
const numbers = "123456789".split("") 
const symbols = "!@#$%^&*()".split("")

var passwordRan = [""];
var random = "";

if (upCase === true) {
    passwordRan = lettersU + passwordRan;
};       
if (lowCase === true) {
    passwordRan = lettersL + passwordRan;
};
if (numb === true) {
    passwordRan = numbers + passwordRan;
};
if (sym === true) {
    passwordRan = symbols + passwordRan;
};

function generatePassword() {
    for (var i = 0; i < charLength; i++) {
    var random = passwordRan[Math.floor(Math.random() * passwordRan.length)]   
    };
console.log(random)
};

// for (var i = 0; i < charLength; i++) {
        

//      passwordRan[Math.floor(Math.random() * passwordRan.length)]
//         console.log(passwordRan)
//         return passwordRan;
//     }



    //             function writeLowerCase() {
    //                 var text1 = '';
    //                 const lettersL = 'abcdefghijklmnopqrstuvxyz';
    //                 text1 += lettersL[Math.floor(Math.random() * lettersL.length)];
    //                 console.log(text1);
                
    //             }

    //             function writeUpperCase() {
    //                 var text2 = "";
    //                 const lettersU = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
    //                 text2 += lettersU[Math.floor(Math.random() * lettersU.length)];
    //                 console.log(text2);
                
    //             }

    //             function writeRanNumber() {
    //                 var text3 = "";
    //                 const numbers = '1234567789';
    //                 text3 += numbers[Math.floor(Math.random() * 9)];
    //                 console.log(text3)
                
    //             }

    //             function writeRanSymbol() {
    //                 var text4 = "";
    //                 const symbols = '!@#$%^&*()';
    //                 text4 += symbols[Math.floor(Math.random() * 10)];
    //                 console.log(text4)
    //             }
    // }


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



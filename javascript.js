// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function writePassword() {
    var password = generatePassword();
    // console.log(passwordText)
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
   console.log(passwordText)
}
// Prompts //
do { var charLength = prompt("Between 8-128 characters, how many would you like?"); }
while (charLength < 8 || charLength > 128)
console.log(charLength)

var upCase = confirm("Would you like Upper Case letters?");
var lowCase = confirm("Would you like lower case letters?");
var numb = confirm("Would you like numbers?");
var sym = confirm("Would you like symbols?");
var generateBtn = document.querySelector("#generate");
var lettersL = "abcdefghijklmnopqrstuvxyz"
var lettersU = "ABCDEFGHIJKLMNOPQRSTUVXYZ"      
var numbers = "123456789"
var symbols = "!@#$%^&*()"
var passwordEl = "";
var passwordRan = "";

// logic for outcome
if (upCase === true) {
    passwordRan = lettersU + passwordRan
    //console.log(passwordRan);
};       
if (lowCase === true) {
    passwordRan = lettersL + passwordRan
    //console.log(passwordRan)
};
if (numb === true) {
    passwordRan = numbers + passwordRan
    //console.log(passwordRan)
};
if (sym === true) {
    passwordRan = symbols + passwordRan
    //console.log(passwordRan)
};

function generatePassword() {
    for (var i = 0; i < charLength; i++) {
        passwordEl += passwordRan[Math.floor(Math.random() * passwordRan.length)]
    };
    console.log(passwordEl);
    return passwordEl
    
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




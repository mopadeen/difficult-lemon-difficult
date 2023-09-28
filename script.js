// // Assignment code here


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

var lowercaseChars = ['a' , 'b' ,'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z'];
var uppercaseChars = ['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I' , 'J' , 'K' , 'L' , 'M' , 'N' , 'O' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 'Y' , 'Z'];
var numberChars = ['0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9'];
var specialChars = ['!' '@' '#' '$' '%' '^' '&' '*' '(' ''' ')' '_' '+' '{' '}' '[' ']' '|' ':' ';' '"' '<' '>' ',' '.' '?' '/' '''];



function generatePassword() {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()_+{}|":?></.,';

  let length = parseInt(alert("Enter the length of the password between 8 and 128 characters:"));


}

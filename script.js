// Assignment code here

var characterLength = 8;
var choiceArr = [];

var lowercaseChars = ['a' , 'b' ,'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z'];
var uppercaseChars = ['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I' , 'J' , 'K' , 'L' , 'M' , 'N' , 'O' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 'Y' , 'Z'];
var numberChars = ['0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9'];
var specialChars = ['!' , '@' , '#' , '$' , '%' , '^' , '&' , '*' , '(' , ')' , '+' , '{' , '}' , '[' , ']' , '|' , ':' , ';' , '"' , '<' , '>' , ',' , '.' , '?' , '/'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
  var newpassword = generatePassword();
  passwordText.value = newpassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomLetter = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomLetter];
  }
  return password;
}



function getPrompts(){
  choiceArr = [];
  characterLength = parseInt(prompt("How many characters would you like your password to be? (8 - 128 characters"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be between 8 and 128 characters. Please try again");
    return false;
  }
  if (confirm("Would you like to include lowercase letters?")) {
    choiceArr = choiceArr.concat(lowercaseChars);
  }
  if (confirm("Would you like to include uppercase letters?")) {
    choiceArr = choiceArr.concat(uppercaseChars);
  }
  if (confirm("Would you like to include numbers?")) {
    choiceArr = choiceArr.concat(numberChars);
  }
  if (confirm("Would you like to include special characters?")) {
    choiceArr = choiceArr.concat(specialChars);
  }
  return true;
}

getPrompts();
writePassword();
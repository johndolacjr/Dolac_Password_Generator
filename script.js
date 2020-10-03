// Assignment Code
var numbers = "0123456789";
var special = "!@#$%^&*()";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";

function getPasswordOptions() {
  var length = prompt("How long do you want your password?");
  
  if (length < 8  || length > 128){
    alert ("PW must be between 8 and 28 characters");

    return 
    } 

  var upChar = confirm("Do you want upper case letters?");
  var loChar = confirm("do you want lower case letters?");
  var spChar = confirm("Do you want special characters?");
  var numChar = confirm("Do you want numbers?");
  //add validation after variables are made (inside the gitPassword function need to put in a number 
  //between 8 and 128; use a number not a letter/ validation make sure they say yes to one of those options )

  var passwordOptions = {
    length: length,
    upperLetters: upChar,
    lowerLetters: loChar,
    numbers: numChar,
    special: spChar
  }

  return passwordOptions;

}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;

}
function pushChar(getPasswordOptions) {
  var passwordOptions = getPasswordOptions;
  var results = "";

  if (passwordOptions.lower) {
    results += lowerLetters;
  }
  if (passwordOptions.upper) {
    results += upperLetters;
  }
  if (passwordOptions.numbers) {
    results += numbers;
  }
  if (passwordOptions.special) {
   results += special;
  }

  return results;
}

function generatePassword() {
  var result = "";
  var possibleChar = getPasswordOptions();
  var guaranteedChar = pushChar(possibleChar);

  

  for (let i = 0, len = possibleChar.length, text = ""; i < len; i++) {
    result += getRandom (guaranteedChar);
  }

return result} 

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



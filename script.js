// Assignment Code
var numbers = "0123456789".split("");
var special = "!@#$%^&*()".split("");
var lowerLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var upperLetters = "ABCDEFGHIJKLMNOPQURSTUVWXYZ".split("");

function gitPasswordOptions() {
  var length = prompt("How long do you want your password?");
  var upChar = confirm("Do you want upper case letters?");
  var loChar = confirm("do you want lower case letters?");
  var spChar = confirm("Do you want special characters?");
  var numChar = confirm("Do you want numbers?");
//add validation after variables are made (inside the gitPasswrod function need to put in a number 
//between 8 and 128; use a number not a letter/ validation make sure they say yes to one of those options )

var passwordOptions = {
  length:length,
  upper:upChar,
  lower:loChar, 
  numbers:numChar, 
  special:spChar
}

return passwordOptions;

}

function gitRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;

}

function generatePassword() {
  var result = []
  //final password 
  var possibleChar = []
  // function pushChar(){

  //holds all possible types of characters the user said yes too
  // var guaranteedChar = []
  var passwordOptions = gitPasswordOptions();
  function pushChar() {

  if (passwordOptions.lower) {
    passwordOptions = passwordOptions.concat(lowerLetters);
    passwordOptions.push(gitRandom(lowerLetters));
  }

  if (passwordOptions.upper) {
    passwordOptions = passwordOptions.concat(upperLetters);
    passwordOptions.push(gitRandom(upperLetters));
  }
  if (passwordOptions.numbers) {
    passwordOptions = passwordOptions.concat(numbers);
    passwordOptions.push(gitRandom(numbers)); 
  }
  if (passwordOptions.special) {
    passwordOptions = passwordOptions.concat(special);
    passwordOptions.push(gitRandom(special)); 
  }
  return possibleChar;
  } 

    
    // 1 loop to loop through the possibleChar array and push to the result array (options.length) number of times. 
    // last loop run through the guarantee array and those characters overwrite the characters in teh result array
    // return result. 
}



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

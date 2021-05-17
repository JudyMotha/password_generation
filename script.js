//Defining password components alphabets ,numbers & special characters
var alphalower = "abcdefghijklmnopqrstuvwxyz";
var alphaupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var digits = "0123456789";
var specialchar= "!#$%&\'()*+,-./:;<=>?@[\\]^_`{|}";

var generateBtn = document.querySelector("#generate");

// Function 
function generatePassword() {
// User interactions at the prompt 
// Validates length
// Validates password combination options 

  var pwdlength = prompt("Select password length min 8 max 128 characters");
  if (!pwdlength || pwdlength < 8 || pwdlength > 128   )      {
    alert("Enter valid length 8-128 characters  both inclusive!");
    return generatePassword();
   }
  if (pwdlength >=8 && pwdlength <= 128)    {
  var LowerCase = confirm(" Lowercase OK/Cancel");
  var UpperCase = confirm(" Uppercase OK/Cancel");
  var Numeric = confirm("Numbers Ok/Cancel");
  var symbols = confirm("Special characters Ok/Cancel");
   }
  if (!symbols && !Numeric && !LowerCase && !UpperCase)    {
    alert("Give a valid entry!");
    return generatePassword();
   }

  // Password Consolidation starts here
  if (LowerCase)   {
    var LowerCase = alphalower;
  }   else    {
    var LowerCase = [""];
  }
  if (UpperCase)    {
    var UpperCase = alphaupper ;
  }   else {
    var UpperCase = [""];
  }
  if (symbols)   { 
    var symbols = specialchar;
  }   else   {
    var symbols = [""];
  }
  if (Numeric) {
    var Numeric = digits;
  }   else {
    var Numeric = [""];
  }

  //Adding-Concat all possible combination ;Random generator - Look at  video2 bootcamp class 5/10/2021 for later reference
  
  var password = "";

  var options = symbols + Numeric + LowerCase + UpperCase;
    
  for (var index =0; index < pwdlength; index++) {
    var allpwdcharacters = options[Math.floor(Math.random() * options.length)];
    password += allpwdcharacters;
  }
  
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
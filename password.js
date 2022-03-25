//Password Validation System

console.log("Welcome to password validation system!");

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please Enter Password (Minimum of 10 Characters): ", function(input){
    const password = input;
    if(password.length > 9){
        console.log("Congratulations! Password validated successfully!");
    } else {
        console.log("Password Validation Failed!");
    }
    reader.close();
})
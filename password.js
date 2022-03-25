//Password Validation System

console.log("Welcome to password validation system! \nPassword Requirements: \n- 10 characters or more \n- At least 1 upper case Letter \n- At least 1 lower case letter \n- At least 1 number \n- At least 1 special character *!@+#;:");

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please Enter Password: ", function(input){
    const password = input;
    
    let bLength = false;
    let bCapLetter = false;
    let bLowLetter = false;
    let bNumber = false;
    let bSpecial = false;
    const specialChars = /[*!@+#;:]/;

    if(password.length > 9){
        bLength = true;
    }

    for(let i = 0; i < password.length; i++){
        if (!isNaN(password[i])) {
            bNumber = true;
        } else if(specialChars.test(password[i])) {
            bSpecial = true;
        } else if(password[i] === password[i].toUpperCase()){
            bCapLetter = true;
        } else if (password[i] === password[i].toLowerCase()) {
            bLowLetter = true;
        }
    }

    if (bLength && bNumber && bSpecial && bCapLetter && bLowLetter){
        console.log("Congratulations! Password validated successfully!");
    } else {
        console.log("Sorry the password could not be validated. \nErrors:");
        if(!bLength){
            console.log("Password is not at least 10 characters.");
        }
        if(!bCapLetter){
            console.log("Does not contain at least 1 upper case letter.");
        }
        if(!bLowLetter){
            console.log("Does not contain at least 1 lower case letter.");
        }
        if(!bNumber){
            console.log("Does not contain at least 1 number.");
        }
        if(!bSpecial){
            console.log("Does not contain at least 1 special character *!@+#;:")
        }
    }

    // if(password.length > 9){
    //     console.log("Congratulations! Password validated successfully!");
    // } else {
    //     console.log("Password Validation Failed!");
    // }
    reader.close();
})
/**
1) You are tasked with creating a JavaScript function that checks the strength of a password. Password strength is evaluated based on the following criteria:

The password must be at least 8 characters long.
The password must contain at least one uppercase letter.
The password must contain at least one lowercase letter.
The password must contain at least one digit (0-9).
The password must contain at least one special character (e.g., !, @, #, $, etc.).
2) Your goal is to implement the passwordStrengthChecker function that takes a string representing a password and returns true if the password meets all the criteria, and false otherwise.
Instructions:
1) Write the passwordStrengthChecker function according to the specified criteria.
2) Use a while loop to iterate through the characters of the password.
3) Inside the loop, check each character against the criteria (length, uppercase, lowercase, digit, special character). You may need to use regular expressions or other string methods.
4) Keep track of whether each criterion is met.
5) Return true only if all the criteria are met, and false otherwise.
Hints:
You can use regular expressions to check for character types (uppercase, lowercase, digit, special character).
You can maintain a separate variable for each criterion (e.g., hasUppercase, hasLowercase, hasDigit, hasSpecialChar).
To check the length, you can use the .length property of the password string.
To iterate through the characters of the password, use a while loop.
Break down the problem into smaller sub-problems and solve each part separately.
 */

// Create a program and print output according to the test case given below.
// Create a program and print output according to the test case given below.
function passwordStrengthChecker(password) {
 // Your code here
    const hasDigit = /\d/;
    const hasLowercase = /[a-z]/;
    const hasUppercase = /[A-Z]/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/; 
    
    while (true) {
        if(password.length < 8 ) {
            return false;
        }

        if (!hasUppercase.test(password)) {
            return false;
        }

        if (!hasLowercase.test(password)) {
            return false;
        }
        if(!hasDigit.test(password)){
            return false;
        }
        if(!hasSpecialChar.test(password)){
            return false;
        }
        return true;            
        }
}


// Test Case:
console.log(passwordStrengthChecker("Ab1@C")); // Should return false
console.log(passwordStrengthChecker("StrongP@ssword123")); // Should return true
console.log(passwordStrengthChecker("Weak123")); // Should return false
console.log(passwordStrengthChecker("AbCdEfG1@")); // Should return true
console.log(passwordStrengthChecker("@$#123")); // Should return false

const firstName = "Nontombi"; //cannot be changed
let surname = "Mbowane";
let numberInWords = "Two Thousand and Fifty";

firstName = "Nonty";

console.log(firstName, surname, numberInWords);
/**
    1) You are given a piece of JavaScript code that has a bug related to naming conventions. Your task is to identify and correct the naming convention bug in the code. Ensure that the code adheres to proper JavaScript naming conventions.
 */

    let myFavoriteNumber = 42;
    const myFavoriteColor = "blue";
    if (myFavoriteNumber === 42) {
    console.log("My favorite number is correct!");
        } else {
            console.log("My favorite number is incorrect.");
        }

    if (myFavoriteColor === "blue") {
        console.log("My favorite color is correct!");
        } else {
            console.log("My favorite color is incorrect.");
}

/**Your goal is to make the code work without any errors. To do this, you need to modify the given code snippet.
2) The code should log the string "Hello, World!" to the console without any reference error.
3) You should not use any functions or function declarations in your solution. Focus on variable declarations and hoisting.
4) Print the appropriate message based on the test case shown below. 

console.log(message);
var message = "Hello, World";*/

/**Solution */
const message = "Hello, World";
console.log(message);

/**
1) Examine the provided code snippet carefully.
2) Identify the bug within the if-else statement.
3) Modify the code to remove the bug and make the program print the appropriate message based on the given conditions.
4) Do not create a new function. You should modify the existing code within the if-else statement.
5) Make sure to maintain the structure of the if-else statement.
6) Print the appropriate message based on the test case shown below.

let isSummer = true;

if (isSummer == true) {
  console.log("It's a hot summer day!");
} else {
  console.log("It's not summer, or it's not hot.");
}

 */

/**Solution */
let isSummer = true;

if (!isSummer) {
    console.log("It's a hot summer day!");
} else {
    console.log("It's not summer, ot it's not hot.");
}


/***
    Modify the code print the appropriate message based on the test case shown below
Bug:
The code above is incorrect because the age variable is declared with const, which means that its value cannot be changed. However, the code inside the if statement tries to reassign the value of age to 30. This will result in a TypeError.

const name = "Alice";
const age = 25;

if (name === "Alice") {
  age = 30;
}

console.log(age); // Should print 30
 */
let name = "Alice";
let age = 25;

let isName = true;
if (isName) {
    age = 30;
} else {
    age = 25;
}

console.log(age);

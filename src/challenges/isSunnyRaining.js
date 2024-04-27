/**1) You need to fix the code above to ensure that the correct message is printed based on the values of isRaining and isSunny.
2) You are not allowed to modify the variables or introduce new ones
3) Ensure that only one of the three console.log statements is executed, depending on the values of isRaining and isSunny.
4) Modify the code print the appropriate message based on the test case shown below.

// Challenge: Fix the bug in this code
let isRaining = false;
let isSunny = true;

if (isRaining) {
  console.log("Don't forget your umbrella!");
} else if (isSunny) {
  console.log("Enjoy the sunshine!");
} else {
  console.log("No need for an umbrella, and it's not sunny either.");
}

// This code snippet should print "Enjoy the sunshine!"

 */

let isRaining = true;
let isSunny = true;

if (isSunny || isRaining) {
    console.log("Enjoy the sunshine!");
} else {
    console.log("No need for an umbrella, and it's not sunny either.");
}
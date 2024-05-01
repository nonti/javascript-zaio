/**
1) Modify the code and print the appropriate message based on the test case shown below
2) You are given a simple piece of JavaScript code that checks if a given variable x is truthy or falsy. However, there is a bug in the code that needs to be fixed.
3) For the given code, when x is set to "0", it currently prints "x is truthy," which is incorrect. Your task is to fix the code so that it correctly identifies "0" as a falsy value.
 */

let x = "";
if (x) {
    console.log("x is truthy");
} else {
    console.log("x is falsy");
}
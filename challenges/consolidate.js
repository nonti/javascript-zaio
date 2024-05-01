/**
1) Modify the code and print the appropriate message based on the test case shown below.
2) Modify the values of a and b to make the provided conditional statement evaluate to true. You are only allowed to use simple expressions to do this. The statement should not contain any functions or complex operations.
 */

const a = 25;
const b = 14;

//conditional statements
// if (a > b && b < a) {
//     console.log("The condition is true");
// } else {
//     console.log("The condition is false ");
// }

// console.log(true !== false);

function consollidat() {
    if (a > b && b < a) {
        return "the condition is true";
    } else {
        return "the condition is false";
    }

}

const result = consollidat();
console.log(result);
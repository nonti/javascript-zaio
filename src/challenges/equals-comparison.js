/***
You are provided with three variables, a, b, and c, each holding different values of different data types. Your task is to write an if-else statement to compare these variables using both the equality operators == and ===. You should perform multiple comparisons and output the results.
Hints:
The == operator checks for loose equality, meaning it will compare the values for equality without considering their data types.
The === operator checks for strict equality, meaning it compares both the values and data types.
 */

const a = 10;
const b = "10";
const c = true;

// Write an if-else statement to compare these variables.
// Use both '==' and '===' operators to perform the comparisons.

if (a == b) {
    console.log("true");
} else if (a === b) {
    console.log("false");
} else if (a == c) {
    console.log("false");
} else if (a === c) {
    console.log("false");
}


// Output the result in console.log

console.log("false");
console.log("false");
console.log("false");
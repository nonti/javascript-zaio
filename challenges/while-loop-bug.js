/**
You are given a simple JavaScript program that uses a while loop to calculate the remainder of dividing two positive integers, dividend and divisor. There is a bug in the code that needs to be fixed to ensure it calculates the remainder correctly.
Instructions:
1) Open the provided JavaScript code.
2) Identify the bug that is causing incorrect results.
3) Fix the bug.
4) Run the code and ensure that it correctly calculates the remainder of dividing dividend by divisor.
5) Submit your fixed code along with comments explaining the bug and how you fixed it.
 */

// Modify the code and print the appropriate message based on the test case shown below.

let dividend = 25;
let divisor = 4;

// Initialize the result
let remainder = 0;

// Keep subtracting divisor from dividend until dividend becomes less than the divisor
while (dividend >= divisor) {
    dividend = dividend - divisor;
    remainder++;
}


console.log("The remainder is:", remainder);



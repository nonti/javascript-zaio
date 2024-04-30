/**
nstructions:
1) The code provided uses a do...while loop to calculate the remainder.
2) Your task is to fix the code inside the loop to correctly calculate the remainder
3) You should not modify any part of the code outside the loop.
4) You are allowed to add variables and statements inside the loop to fix the bug.
5) The corrected code should work for all positive integer values of dividend and divisor.
6) Your code should pass the provided test case.
Note:
The code inside the do...while loop is intentionally incorrect and needs to be fixed to pass the test case. Your task is to find the bug and make the code work correctly.
 */

 // Given positive integers
let dividend = 17;
let divisor = 3;

let remainder = 0;

do {
  // Fix the bug in the following line
  remainder = dividend - divisor;
  dividend = remainder;
} while (dividend >= divisor);

console.log("The remainder is: " + remainder);
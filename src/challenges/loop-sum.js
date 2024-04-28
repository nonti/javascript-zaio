/**
1) Write a JavaScript program that prints the Fibonacci sequence up to a specified number. You must use a for loop and avoid using any functions. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones.
2) Your task is to create a for loop that calculates and prints the Fibonacci sequence until the sum exceeds or is equal to the given limit.
3) After creating for loop, print the statement according to the test case shown below.
Hints:
1) Start by initializing two variables, first and second, to 0 and 1, respectively. These will represent the first two numbers in the Fibonacci sequence.
2) Inside the for loop, you should do the following:Print the value of first.
Update first and second to represent the next numbers in the sequence.
Check if the next Fibonacci number (the sum of first and second) is greater than or equal to the specified limit.
If the next Fibonacci number is greater than or equal to the limit, break out of the loop.
If not, continue the loop until the condition is met.

 */


// Input: Set the limit for the Fibonacci sequence
const limit = 17;

// Initialize variables to store the first two numbers
let first = 0;
let second = 1;
let next;
let result = [];

// TODO: Create a for loop to generate and print the Fibonacci sequence
if (limit >= 1) {
    result.push(first);
}

if (limit >= 2) {
    result.push(second);
}

for (let x = 3; x <= limit; x++) {
    next = first + second;
    result.push(next);
    first = second;
    second = next;
    result.toString();
}

console.log(result.join(", "));
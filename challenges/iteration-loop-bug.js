/**
Instructions:
1) In this challenge, you will have to find the bug in the given code.
2) Print the final output according to test case given below.
 */

const numbers = [5, 10, 15, 20, 25];
let sum = 0;

numbers.forEach((num) => {
    sum += num;
});

console.log("The sum of all numbers is: ",sum);
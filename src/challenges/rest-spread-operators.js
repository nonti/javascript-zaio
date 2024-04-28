/**
Instructions:
You are tasked with implementing a JavaScript function that works with rest and spread operators, without using loops, classes, or arrays. You will need to work with numbers and strings. Your goal is to create two functions, calculate and concatenate, each with a specific set of requirements.
Challenge:
1) Your task is to implement a function calculate that takes a variable number of numeric arguments and performs calculations on these values using the rest operator. The function should accept two arguments:
operation (string): A string representing the operation to perform. It can be one of the following: "add", "subtract", "multiply", or "divide".
...args (rest parameter): An arbitrary number of numeric values on which the operation will be performed.
2) The function should return the result of applying the specified operation to all the numeric arguments. Ensure that the division operation handles division by zero and returns "Cannot divide by zero" in such cases.
HInt:
Use the rest operator to collect the numeric arguments into an array-like structure.
Use a switch statement or a series of if statements to handle different operations.
 */

function calculate(str, a,...args) {
    
    return args.reduce((acc , res) => {
        switch (str) {
            case "add":
                return acc + res;
            case "subtract":
                return acc - res;
            case "multiplres":
                return acc * res;
            case "divide":
                return acc / res;
            default:
                return acc;
        }
    }, a);
}

console.log(calculate("add", 1, 2, 3, 4));
console.log(calculate("subract", 10, 3, 2, 1));
console.log(calculate("multiply", 2, 3, 4, 5)); // Output: 120
console.log(calculate("divide", 20, 5, 2, 1)); // Output: 2
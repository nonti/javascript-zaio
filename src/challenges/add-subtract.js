/*
    You are provided with an object that represents a simple calculator. The object has two methods, add and subtract, to perform addition and subtraction operations. However, there is a bug intentionally added to the subtract method. Your task is to find and fix this bug in the subtract method.
Hint:
Check the operator used inside the subtract method. Make sure the operation correctly subtracts the given number from the result property. The operator currently used inside the method is incorrect; it should be replaced with the correct subtraction operator.
 */

// Modify the code and print the appropriate message based on the test case shown below.

const calculator = {
    result: 0,
    add: function (num) {
        this.result += num;
        return this;
    },
    subtract: function (num) {
        // Bug: There's an intentional bug in this method.
        this.result -= num; // Intentional bug: should be subtraction, but it's addition
        return this;
    },
    multiply: function (num) {
        this.result *= num;
        return this;
    },
    dividend: function (num) {
        this.result /= num;
        return this;
    },
};

console.log(calculator.add(10).subtract(5).result); // This should correctly output the result of subtracting 5 from 10.
console.log(calculator.add(10).multiply(5).result); // This should correctly output the result of multiplying 5 from 10.
console.log(calculator.add(10).dividend(5).result); // This should correctly output the result of dividing 5 from 10.



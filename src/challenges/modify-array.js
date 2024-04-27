/**
In this coding challenge, you will be given a JavaScript code snippet that contains a bug related to reference types. Your task is to identify and fix the bug. Reference types in JavaScript, such as arrays and objects, are often tricky due to their reference-based behavior.
Your task:
1) Identify the bug in the code.
2) Fix the bug to ensure that originalArray is modified correctly.
3) Make sure to keep the modifyArray function as part of your solution.
Hint:
Pay attention to how JavaScript handles reference types.
The bug is related to how the array is being manipulated within the modifyArray function.

 */

// Modify the code and print the appropriate message based on the test case shown below.

function modifyArray(arr) {
    
    arr.splice(0, arr.length, 4);
}

const originalArray = [1, 2, 3];
modifyArray(originalArray);

console.log(originalArray); // Should print [4]

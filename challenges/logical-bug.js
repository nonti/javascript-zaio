/**
1) Modify the code and print the appropriate message based on the test case shown below.
2) You have been given a JavaScript code snippet that contains a bug related to logical operators. Your task is to identify the bug and fix it. You are not allowed to create new functions or modify the existing code structure. You must work within the provided code snippet to correct the issue
 */

const a = true;
const b = false;
const c = true;
const d = false;
const e = true;

//Your task is to fix the bug in this code snippet changed && to || between d and e
const result = (a && b) || (c && d)|| e;

// Your code should produce the correct output for the following test case
if (result === true) {
  console.log("Test case passed!");
} else {
  console.log("Test case failed. Bug not fixed.");
}

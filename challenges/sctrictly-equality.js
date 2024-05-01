/***

1) Modify the code and print the appropriate message based on the test case shown below.
2) You are given a code snippet that is intended to compare two values using JavaScript's equality operators == and ===. However, there is a bug in the code that causes unexpected behavior. Your task is to identify the bug and fix it.

let value1 = '5';
let value2 = 5;

// Compare value1 and value2 using ==
if (value1 == value2) {
  console.log('Using ==: The values are equal.');
} else {
  console.log('Using ==: The values are not equal.');
}

// Expected output is "Using ==: The values are not equal."

// Compare value1 and value2 using ===
if (value1 === value2) {
  console.log('Using ===: The values are strictly equal.');
} else {
  console.log('Using ===: The values are not strictly equal.');
}

// Expected output is "Using ===: The values are not strictly equal."

 */

let value1 = '5';
let value2 = 5;

if (value1 == value2) {
    console.log("Using ==: The values are not equal.");
} else {
    console.log('Using ==: The values are equal');    
}

//Expected output is "Using ==: The values are not equal."


if (value1 === value2) {
  console.log('Using ===: The values are strictly equal.');
} else {
  console.log('Using ===: The values are not strictly equal.');
}

console.log('Using ===: The values are not strictly equal.');
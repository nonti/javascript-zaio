/**
1) Modify the code and print the appropriate message based on the test case shown below.
2) You are provided with a set of expressions, each followed by a comment indicating whether the expressions should strictly equal true or false.
3) Use the === operator to evaluate each expression.
4) Replace the ?? in each expression with === to make it strictly equal true or false.
 */

// Test if 5 is strictly equal to 5 (true)
let a = 5 == 5;
console.log(a);
// Test if "5" is strictly equal to 5 (false)
let b = "5" === 5;
console.log(b);
// Test if 5 is strictly equal to "5" (false)
let c = 5 === "5";
console.log(c);
// Test if 5 is strictly equal to 6 (false)
let d = 5 === 6;
console.log(d);
// Test if true is strictly equal to 1 (false)
let e = true === 1;
console.log(e);
// Test if true is strictly equal to "true" (false)
let f = true === "true";
console.log(f);
// Test if "true" is strictly equal to true (false)
let g = "true" === true;
console.log(g);
// Test if NaN is strictly equal to NaN (false)
let h = NaN === NaN;
console.log(h);
// Test if 0 is strictly equal to false (false)
let j = 0 === false;
console.log(j);
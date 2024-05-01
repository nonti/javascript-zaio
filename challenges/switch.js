/**
1) Write a JavaScript program that takes an integer as input and returns a string based on the following conditions:
If the input is 1, print "One."
If the input is 2, print "Two."
If the input is 3, print "Three."
If the input is 4, print "Four."
If the input is 5, print "Five."
For any other input, print "Not a valid input."
2) Your code should use a switch statement to achieve this.
3) After creating the program, print the output according to the test case shown below.
*/

function switchChallenge(n) {
    let result = "";
    switch (n) {
        case 1:
            result = "One";
            break;
        case 2:
            result = "Two";
            break;
        case 3:
            result = "Three";
            break;
        case 4:
            result = "Four";
            break;
        case 5:
            result = "Five";
            break;
        default:
            if (n > 5) {
                result = "Not a valid input.";
            }
    }
    return result;
}

console.log(switchChallenge(1));
console.log(switchChallenge(2));
console.log(switchChallenge(3));
console.log(switchChallenge(4));
console.log(switchChallenge(5));
console.log(switchChallenge(6));
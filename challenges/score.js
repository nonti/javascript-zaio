/**
You are tasked with creating a simple grade calculator in JavaScript. The program should take a numeric score as input and determine the corresponding letter grade based on the following criteria:
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
2) Your task is to implement this using if-else statements. Below is the starter code to get you started.
3) Make sure your code provides the appropriate output for each test case and handles the case of invalid input.

// User's score as input 
const scoreOne = 95;
const scoreTwo = 78;
const scoreThree  = 42;
// your code here 

output the corresponding letter grade to the user
 */

const scoreOne = 95;
const scoreTwo = 78;
const scoreThree = 42;


    function calculateGrade(score) {
        if (score >= 90 && score <= 100) {
            return 'A';
        } else if (score >= 80 && score <= 89) {
            return 'B';
        } else if (score >= 70 && score <= 79) {
            return 'C';
        } else if (score >= 60 && score <= 69) {
            return 'D';
        } else if (score >= 0 && score <= 59) {
            return 'F';
        } else {
            return 'Invalid score';
        }
    }


console.log(calculateGrade(scoreOne));
console.log(calculateGrade(scoreTwo));
console.log(calculateGrade(scoreThree));



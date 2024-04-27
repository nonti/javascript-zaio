/**
1) Modify the code and print the appropriate message based on the test case shown below.
2) Create a JavaScript function that calculates the area of a rectangle and includes the current minutes.
3) Your function should take two parameters, length and width, and return the calculated area along with the current minutes.
Rules:
1) You must use the provided function signature.
2) The function should return a string that includes the calculated area and the current minutes, e.g., "Area: 15, Current Minutes: 30".
3) Ensure that the function handles different values for length and width correctly.
4) Use new Date().getMinutes() to obtain the current minutes.
5) The test cases should be written in a way that demonstrates the correctness of your function.
Hints:
To calculate the area of a rectangle, you can use the formula: area = length * width.
Use new Date().getMinutes() to obtain the current minutes.
Make sure to use the return keyword to return the result from the function.
 */

function calculateAreaWithMinutes(width, length) {
    const area = length * width;
    const date = new Date();
    const minutes = "xx";
    return { area, minutes };
}

const result = calculateAreaWithMinutes(47, 5);
console.log(`Area: ${result.area}, Current Minutes: ${result.minutes}`);
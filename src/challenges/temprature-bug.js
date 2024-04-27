/**
1) Modify the code and print the appropriate message based on the test case shown below.
2) In the given code snippet, you need to use the ternary operator to assign the correct value to the variable weather.
3) The conditions are as follows: If the temperature is less than 0, set weather to "Freezing."
If the temperature is between 0 and 15 (inclusive), set weather to "Cold."
If the temperature is between 16 and 25 (inclusive), set weather to "Mild."
If the temperature is greater than 25, set weather to "Hot."

*/

let temperature = 30;
let weather = 0;


// Fix the bug in the next line
weather = temperature < 0 ? "Freezing" : temperature <= 15 ? "Cold" : temperature <=  25 ? "Mild" : "Hot";

// The above line should be a single line using the ternary operator.

console.log(weather); // Should print the correct weather condition as shown.
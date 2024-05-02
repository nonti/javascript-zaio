/**In this coding challenge update the remaining properties of a given array according to the test case given below and print the output to see the result. */


// Given array 
let colors = ["red", "blue", "white", "green", "pink", "violet"];


// Replace "red" with "orange"
const redIndex = colors.indexOf("red");
colors[redIndex] = "orange";


// Replace "blue" with "purple"
const blueIndex = colors.indexOf("blue");
colors[blueIndex] = "purple";


// Replace "white" with "black"
const whiteIndex = colors.indexOf("white");
colors[whiteIndex] = "black";


// Replace "green" with "yellow"
const greenIndex = colors.indexOf("green");
colors[greenIndex] = "yellow";


// Replace "pink" with "coral"
const pinkIndex = colors.indexOf("pink");
colors[pinkIndex] = "coral";
 
//use map method to shorten the code
const colorReplacements = {
    "red": "orange",
    "white": "black",
    "green": "yellow",
    "pink": "coral",
    "blue": "purple",
    "violet": "beige"
};

colors = colors.map(color => colorReplacements[color]);

// Print the output
console.log(colors) 
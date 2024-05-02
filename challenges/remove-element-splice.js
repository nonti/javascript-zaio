//In this challenge, you will learn how to remove a number of elements from an array by using the splice() function in javascript.


// Challenge 01

let months = ["jan", "feb", "march", "april", "may", "june", "july", "august", "october", "november", "december"];

// Remove "jan" to "may" from months array using splice() and print output
const monthIndex = months.indexOf("jan");
months.splice(monthIndex, 5);
console.log(months);

// Challenge 02

let colors = ["red", "blue", "yellow", "pink", "grey"];

// Remove "blue" to "pink" from colors array using splice() and print output
const colorIndex = colors.indexOf("red");
colors.splice(colorIndex, 4);
console.log(colors);


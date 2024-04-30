let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
// modifying an array of rows the last element in the array to the value of 10
rows[rows.length - 1] = 10;
console.log("The rows[rows.length - 1] is adding the number 10 to the array" , rows + " and removed the CamperChan element");
//push allows you to push an element to the end of an array
rows.push("freeCodeCamp");
let pushed = rows.push("freeCodeCamp");

console.log("The pushed returns the length of the array after adding the value it was given : " + pushed);
//pop allows you to remove the last element of an array and returns the value
let popped = rows.pop();
console.log("This removed the last element: "  + popped);
console.log(rows);
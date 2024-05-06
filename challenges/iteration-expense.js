/**
Iterate through the properties of an object using a for...in loop.
Use a for...in loop to iterate through the object's properties. Here's the basic structure of the loop:
Inside the loop, you can access the value of each property using the property variable. For example, myObject[property] will give you the value associated with the property.
 */

const expenses = {
  rent: 1200,
  electricity: 100,
  water: 50,
  gas: 80,
  internet: 60,
  groceries: 300,
  home: 50,
  health: 150,
  car: 100,
};

// let total = 0;
// for (const expense in expenses) {
//     total += expenses[expense];
// }

// console.log(total);

let colors = ["red", "blue", "yellow", "pink", "grey"];
let index = colors.indexOf("blue");
 // Remove elements before "blue"
colors.splice(index, 3);
colors.splice(0, index);// Remove "blue" and all elements after it
console.log(colors); 
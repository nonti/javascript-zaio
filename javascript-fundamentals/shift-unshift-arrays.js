// deals with the end of the list
const fruits = ["Apple", "Banana", "Pear", "Kiwi", "Orange", "Watermelon"];
fruits.push("Grapes");
console.log("Pushed to be the last element", fruits);
fruits.pop();
console.log("Removed the last element", fruits);

// deals with the start of the list
fruits.unshift("Coconut");
console.log("Added as the first element", fruits);
fruits.shift();
console.log("Removed the fist element",fruits);
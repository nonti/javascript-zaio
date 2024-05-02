/**Remove the first element from an array using shift()
2) Add ["mint"] property at the start of array using unshift()
3) Print that array to see if the output is matched with a given test case. */

const myArray = ["apple", "banana", "grape", "honeydew", "kiwi", "lemon"];

// Remove the first element from an array using shift()
myArray.shift();

// Add ["mint"] property at the start of array using unshift()
myArray.unshift("mint")

// Print an array 
console.log(myArray)  // Should return ["mint", "banana", "grape", "honeydew", "kiwi", "lemon"]
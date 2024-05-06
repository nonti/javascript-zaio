/**To merge the arrays, use the spread operator .... Place the spread operator inside a new array to combine the elements from both arrays. Here's the syntax:
const mergedArray = [...array1, ...array2];
2) Now, you can access the mergedArray, which contains the merged elements from both array1 and array2.
3) Print the merged array using console.log().
4) Check if it is matched with the test case given below.

 */


const person = [
  {
    name: "John Doe",
    age: 30,
    city: "New York",
  },
  {
    name: "Alice Smith",
    age: 28,
    city: "Los Angeles",
  }
];

const device = [
  {
    product: "Laptop",
    price: 1000,
    brand: "Apple",
  },
  {
    product: "Smartphone",
    price: 500,
    brand: "Samsung",
  }
];

// Merge these arrays given above
const mergedArray = [...person, ...device];
console.log(mergedArray);


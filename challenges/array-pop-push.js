/**
 *1) Remove the last object from the given array
2) Add a new object into the given array with the provided data
3) Print the updated array into the console and see if the result matches with the test case shown below.


 */
const arrayOfObjects = [
  {
    name: "John Doe",
    age: 30,
    address: "123 Main St, City",
    email: "john@example.com"
  },
  {
    name: "Alice Smith",
    age: 28,
    address: "456 Elm St, Town",
    email: "alice@example.com"
  },
  {
    name: "Bob Johnson",
    age: 35,
    address: "789 Oak St, Village",
    email: "bob@example.com"
  }
];


// Remove the last object from give array 

arrayOfObjects.pop();

// Add new object at the end of array whose data would be:
arrayOfObjects.push(
    {
        name: "Mansha Ali",
        age: 34,
        address: "754 Oak St, Village",
        email: "mansha@example.com"
    }
);
 




// Print the updated array 
console.log(arrayOfObjects)
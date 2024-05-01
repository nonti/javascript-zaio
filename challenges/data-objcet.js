/*
n this coding challenge, you'll be working with a JavaScript object and performing various operations on it without using any built-in object methods or functions. You'll need to manually get, add, and modify data within the object.

Instructions:

1) Add a property to the dataObject with the key "name" and assign your name ( John Doe ) as the value.
2) Add a property to the dataObject with the key "age" and assign your age ( 25 ) as the value.
3) Get the "name" property from the dataObject and store it in a variable called nameValue.
4) Get the "age" property from the dataObject and store it in a variable called ageValue.
5) Modify the "age" property in the dataObject by increasing it by 5.
6) Check if the values of nameValue and ageValue are correctly obtained and if the "age" property in dataObject is modified correctly. Log the results to the console.

 */

// Modify the code and print the appropriate message based on the test case shown below.

// Empty object
const dataObject = {
    name: "John Doe",
    age: 25
};

// Get values from the object
dataObject.name;
dataObject.age;

// Modify a property in the object
dataObject.age = dataObject.age;

// Log the results
console.log(`Name: ${dataObject.name}
Age: ${dataObject.age}`);

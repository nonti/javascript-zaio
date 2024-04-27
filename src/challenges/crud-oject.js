/**
 01: Adding a New Property
Add gender property to the myObject using dot notation (myObject.gender = "Male").
02: Updating an Existing Property
Update the age property to 31 using dot notation (myObject.age = 31).03: Deleting a Property

Delete the city property from the myObject using the delete keyword (delete myObject.city).
04: Displaying the Updated Object
Update the myObject and logged to the console to show the changes.
 */

const myObject = {
    name: "John",
    age: 30,
    city: "London"
};

//Add new property 
myObject.gender = "Male";

//updateexisting properrty
myObject.age = 31;

//delete a property
delete myObject.city;

//print the current object
console.log(myObject);
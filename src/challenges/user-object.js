/**
1) Create an object named user with the following properties:

name with a value of "Alice"
age with a value of 28
email with a value of "alice@example.com"
city with a value of "Wonderland"
2) Write JavaScript code to store the keys of the user object in separate variables. You should have four variables, each storing one of the object's keys (name, age, email, and city).
3) Print the values of these variables to the console.
 */

const user = {
    name: "Alice",
    age: 28,
    email: "alice@example.com",
    city: "Wonderland"
}

const { name, age, email, city } = user;

console.log(`name: ${name}
age: ${age} 
email: ${email} 
city: ${city}`);
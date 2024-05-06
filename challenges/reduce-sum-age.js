
/**Your task is to calculate the sum of the "age" key in all the objects
2) Print the output according to the test case given below */

const person = [
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

// Your code here
console.log(person.reduce((acc, item) => acc += item.age, 0));

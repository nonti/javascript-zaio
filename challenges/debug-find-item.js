/**
Read the given code carefully.
There is a bug in this code. You have to find that bug and fix it.
 */

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
console.log(person.find((item) => {
   return item.age == 35
}));



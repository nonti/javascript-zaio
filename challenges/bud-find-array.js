/*
Read the code carefully
there is a bug in this code and fixi it
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
    age: 16,
    address: "456 Elm St, Town",
    email: "alice@example.com"
  },
  {
    name: "Bob Johnson",
    age: 35,
    address: "789 Oak St, Village",
    email: "bob@example.com"
  },
  {
    name: "Robert",
    age: 17,
    address: "789 Oak St, Village",
    email: "robert@example.com"
  }
];


// Your code here
console.log(person.find((item) => {
    return item.age === 17;
}));










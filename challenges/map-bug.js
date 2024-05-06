

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


let height = person.map((item, index) => {
  return {...item, height: 30}
}).forEach((item, index) => {
  console.log(`
  ${item.name}
  ${item.age}
  ${item.address}
  ${item.email}
  ${item.height}
  `)
})
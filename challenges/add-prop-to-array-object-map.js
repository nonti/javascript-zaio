/**Create a new array of objects and replicate the previous keys mentioned above.
 Add one additional key of height ( height: 30 ) into the new array.

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


// Create a new array of objects (mentioned above) and add one more key of height ( height: 30 )
const addHeight = person.map((item, index) => {
    return { ...item, height: 30 }
});


// Print the new array 
console.log(addHeight);
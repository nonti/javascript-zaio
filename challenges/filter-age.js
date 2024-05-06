/**
Filter down the person array.
2) Print only those objects in which the age of the person is above 18.
3) Print the new array to see if it matches with test case given below.
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

// function filterAge() {
//     return person.filter(person => person.age > 18);
// }

// const filterResult = filterAge();
// filterResult.forEach(person => console.log(person));

function filterAge(personArr){
    let filtered = [];
    for(let i = 0; i < personArr.length; i++){
        if(personArr[i].age > 18){
            filtered.push(personArr[i]);
        }
    }
    return filtered;
}

const filteredPerson = filterAge(person);
// filteredPerson.forEach(person => console.log(person));
console.log(filteredPerson);
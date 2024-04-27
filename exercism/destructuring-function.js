// creates an array of top10books, and a function that
// logs the first three books and the remaining books in console
function greet({ name, age }) {
    console.log(`Hello ${name}. You are ${age} years old.`);
}

greet({ name: "Joey", age: 25 });


const top10Books = [
    "1. To Kill a Mockingbird",
    "2. The Great Gatsby",
    "3. The Catcher in the Rye",
    "4. The Lord of the Rings",
    "5. The Hobbit",
    "6. The Diary of a Young Girl",
    "7. The Grapes of Wrath",
    "8. Animal Farm",
    "9. 1984",
    "10. The Adventures of Huckleberry Finn"
];

function rateBooks([firstBook, secondBook, thirdBook, ...reminingBooks]) {
    console.log(`Top three books on the list are ${firstBook}, ${secondBook}, ${thirdBook}`);
    console.log(`The runner-ups are: ${[...reminingBooks]}`);
}

rateBooks(top10Books);
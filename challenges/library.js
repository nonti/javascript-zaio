/*
Instructions:
1) Create a library object that stores information about books and their availability.
2) Implement a method to add a book to the library.
3) Implement a method to check out a book.
4) Implement a method to return a book.
Book Object Structure:
title (string): The title of the book.
author (string): The author of the book.
isAvailable (boolean): Indicates whether the book is available to be checked out.

Library Object Structure:
addBook(book): Adds a book to the library. The book object should be passed as an argument. Ensure the book's isAvailable property is set to true.
checkoutBook(title): Check out a book with the specified title. If the book is available (isAvailable is true), change its isAvailable property to false and return a success message. If the book is not available, return an error message.
returnBook(title): Returns a book with the specified title. If the book is checked out (isAvailable is false), change its isAvailable property to true and return a success message. If the book is not checked out, return an error message.
Hints:
1) Use objects to represent the library and books. The library object can contain a collection of book objects.
2) Use functions to create methods for adding, checking out, and returning books.
3) You can use object methods for these actions */
// Create an object and print the output according to the test case given below.
function createLibrary() {
    return {
        library: {
            book: [
                {
                    title: "Book 1",
                    author: "John Smith",
                    isAvailable: true
                },
                {
                    title: "Book 2",
                    author: "Mark O'Neil",
                    isAvailable: true
                },
                {
                    title: "Book 3",
                    author: "Bluey de Putt",
                    isAvailable: false
                }
            ]
        },

        addBook(book) {
            const newBook = {
                title: book.title,
                author: book.author,
                isAvailable: false
            };
            this.library.book.push(newBook);

        },

        checkoutBook(title) {
            const bookIndex = this.library.book.findIndex(item => item.title === title)
            if (bookIndex !== -1) {
                const book = this.library.book[bookIndex];
                if (book.isAvailable) {
                    book.isAvailable = false;
                    return `${title} has been checked out`;
                } else {
                    return `${title} is not available for checkout`;
                }
            } else {
                return `${title} not found in the library`
            }
        },

        returnBook(title) {
            const bookIndex = this.library.book.findIndex(item => item.title === title)
            if (bookIndex !== -1) {
                const book = this.library.book[bookIndex];
                if (!book.isAvailable) {
                    book.isAvailable = true;
                    return `${title} has been returned`;
                } else {
                    return `${title} is not checked out`;
                }
            } else {
                return `${title} not found in the library`;
            }
        }
    }
}

const myLibrary = createLibrary();
console.log(myLibrary.checkoutBook("Book 1")); // Should log "Book 1 has been checked out."
console.log(myLibrary.checkoutBook("Book 3")); // Should log "Book 3 is not available for checkout."
console.log(myLibrary.returnBook("Book 1"));  // Should log "Book 1 has been returned."
console.log(myLibrary.returnBook("Book 2"));  // Should log "Book 2 is not checked out."
console.log(myLibrary.checkoutBook("Book 2")); // Should log "Book 2 has been checked out."

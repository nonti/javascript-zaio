/**
  You are given a pre-built JavaScript object called userData which contains information about a user.
2) You must delete the following properties from the userData object:
address
phone
3) After deleting these properties, make sure the object is updated correctly.
Challenge Constraints:
Your code should not use any functions or methods to delete the properties from the object (e.g., don't use delete).
you should directly manipulate the userData object to achieve the desired result.
The object should only have the 'name', 'age', and 'email' properties after deletion.

 */

let userData = {
    name: "John Doe",
    age: 30,
    address: "123 Main Street",
    phone: "555-123-4567",
    email: "johndoe@example.com"
};

//delete address and phone properties
const {phone,address, ...newUserData } = userData;

console.log(newUserData);
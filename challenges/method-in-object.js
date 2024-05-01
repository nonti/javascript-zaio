/**
In this coding challenge, you'll be working with JavaScript objects and practicing 
how to add a function (method) to an existing object. 
Your task is to add a function to an object and use it to manipulate the object's properties.
Instructions:
1) Start with an existing object called userProfile. This object has the following properties:
name (string): The user's name.
age (number): The user's age.
balance (number): The user's account balance.
2) Add a function called deposit to the userProfile object. 
This function should take one parameter, amount, 
which represents the amount of money to be deposited. 
The function should increase the balance property by the amount.
Hint:
In your case, you need to add the deposit function to 
the userProfile object, which should update the balance property. 
Use the this keyword to refer to the object's properties within the function.
Make sure the function is correctly added to the object, 
and when you call it, it updates the balance as expected.

 */
// Modify the code and print the appropriate message based on the test case shown below.

// Existing userProfile object
const userProfile = {
    name: "Alice",
    age: 28,
    balance: 1000,
    deposit: function (amount) {
        this.balance += amount;
    }
};

// Initial balance
console.log("Initial Balance:", userProfile.balance);

// Use the "deposit" function to add $500
userProfile.deposit(500);

// After the deposit
console.log("Balance after deposit:", userProfile.balance); // Should print "Balance after deposit: 1500"


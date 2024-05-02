
const myArray = [];
function arrayAccessChallenge(){
// Access the first element of 'myArray' and store it in a variable called 'firstElement'
const firstElement = myArray[0];
// Access the last element of 'myArray' and store it in a variable called 'lastElement'
const lastElement = myArray[myArray.length - 1];
// Check if 'firstElement' is equal to 'lastElement', and store the result in a variable called 'areEqual'
let areEqual = false;
if (firstElement === lastElement) {
     areEqual = true;
    
}
// Return 'areEqual' as the result of the challenge
    return areEqual;
}

// Test Case 
const result = arrayAccessChallenge();
console.log(result); // It should output 'true' 

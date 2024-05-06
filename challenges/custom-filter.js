/**
1) In this coding challenge, you are required to implement a custom customFilter function in JavaScript.
 The function should mimic the behavior of the built-in Array.prototype.filter() method.
2) Your task is to create a function that will filter elements from an array based on a provided
 filtering function and return a new array containing the elements that pass the filter.
3) You need to implement the customFilter function and ensure that it works as described in the instructions below.
parameters
array (Array): The array to filter.
filterFunction (Function): The function to be used for filtering. 
It should take an element as a parameter and return a Boolean value indicating whether the element should be included in the result.
retruns
An array containing the elements that pass the filter.
Hints
You can create an empty array to store the filtered elements and use a loop to iterate through the input array.
Inside the loop, use the filterFunction to check whether each element should be included in the result array.
If the filterFunction returns true for a given element, add that element to the result array.
After iterating through the entire input array, return the result array as the output of your customFilter function.
Consider using a for loop or other iteration techniques to go through each element in the input array.
 */

function customFilter(array, filterFunction) {
    // Your code here
    let filtered = [];
    for (let i = 0; i < array.length; i++) {
        if (filterFunction(array[i], i, array)) {
            filtered.push(array[i]);
        }  
    }
    return filtered;
}


// Test Case
const words = ["apple", "banana", "grape", "kiwi", "pear"];
function isLongWord(word) {
    return word.length > 4;
}
const result = customFilter(words, isLongWord);
console.log(result);

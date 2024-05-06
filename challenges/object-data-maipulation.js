/**
You are given an object data that represents information about a collection of items. You need to implement two functions: filterData and sumValues.

filterData(data, keysArray):
This function takes an object data and an array of keys keysArray.
It should return a new object containing only the key-value pairs from data that have keys present in keysArray.
The order of key-value pairs in the result should match the order of the keys in keysArray.
sumValues(data, keysArray):
This function takes an object data and an array of keys keysArray.
It should return the sum of all the values associated with the keys present in keysArray.
If a key is present in keysArray but not in data, consider its value as 0 in the sum.
Print the output according to the test case given below.
Hints
To implement filterData, you can use Object.keys(data) to get an array of all keys in the data object and Object.values(data) to get an array of all values. Then, use these arrays to construct the filtered object.
When implementing sumValues, you can use reduce to iterate through the keys in keysArray and accumulate the sum of corresponding values.

 */


function filterData(data, keysArray) {
    const filteredObject = {};
  keysArray.forEach(key => {
    if (data.hasOwnProperty(key)) {
      filteredObject[key] = data[key];
    }
  });
  return filteredObject;
}

function sumValues(data, keysArray) {
    return keysArray.reduce((sum, key) => sum + (data[key] || 0), 0);
}


// Test Case
const data = {
  apple: 5,
  banana: 10,
  cherry: 15,
  date: 20,
};

const keysArray = ['banana', 'date', 'apple', 'kiwi'];

const filteredResult = filterData(data, keysArray);
const sumResult = sumValues(data, keysArray);

console.log("Filtered Data:", filteredResult);
console.log("Sum of Values:", sumResult);

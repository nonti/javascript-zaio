/**
Your task is to write a JavaScript function that iterates through a deeply nested object using a for...in loop and returns an array of all the values found within the object. The object can have nested objects and arrays.
You need to implement the iterateObject(obj) function that takes an object as input and returns an array of all the values found within the object. The order of values in the output array should follow a depth-first traversal.
You are allowed to use any built-in JavaScript methods or functions to achieve this. You should not use any external libraries or frameworks.
Hints:
You can use the for...in loop to iterate through the properties of an object.
Use the typeof operator to check the type of a property's value (e.g., typeof obj[key]).
If the value of a property is an object or array, you will need to recursively call the iterateObject function on that value.
You can use the Array.isArray() method to check if a value is an array.
 */
function iterateObject(obj) {
    let value = [];
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            value = value.concat(iterateObject(obj[key]));
        } else {
            value.push(obj[key]);
        }
    }
    return value;
}


const sampleObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: [4, 5],
    },
  },
};

const result = iterateObject(sampleObject);
console.log(result);

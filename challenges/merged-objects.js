/**
1) In this coding challenge, you will work with JavaScript objects and use the rest and spread operators to manipulate their properties. Your task is to create a function mergeObjects that takes in multiple objects and merges them into a single object.
2) You should use the rest parameter to accept an arbitrary number of objects as arguments and then use the spread operator to merge their properties into a new object.
3) Your function should return the merged object with all the properties from the input objects. If there are any conflicts in property names between the input objects, the property value from the later objects should overwrite the earlier ones.
4) Your function should not modify the original objects.
 */

// Modify the code and print the appropriate message based on the test case shown below.

function mergeObjects(...objects) {
  // Your code here
    const newObj = Object.assign({}, ...objects);
    /* const newObj = objects.reduce((acc, obj) =>{
        Object.keys(obj).forEach(key => {
        acc[key] = obj[key];
        });
        return acc;
    }, {});
    return newObj;

*/
    return newObj;
}

// Test case
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };

const merged = mergeObjects(obj1, obj2, obj3);
console.log(merged); // Expected output: { a: 1, b: 3, c: 4, d: 5 }

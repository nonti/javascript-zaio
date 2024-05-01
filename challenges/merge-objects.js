/**
1) You are provided with two objects: object1 and object2. Your task is to merge these two objects into a new object.
2) Use the Object.assign() method to perform the merge.
3) Create a function named mergeObjects(object1, object2) that takes two objects as arguments and returns the merged object.
4) Your function should not modify the original objects; it should create a new object with the merged properties.
5) The merged object should contain all properties from both object1 and object2.
6) If there are properties with the same name in both objects, the value from object2 should overwrite the value from object1 in the merged object.
 */

// Modify the code and print the appropriate message based on the test case shown below.

function mergeObjects(object1, object2) {
    const merge = Object.assign({}, object1, object2);
    // or you sould use rest operator const merge = {...object1, ...object2};
    return merge;
}

const object1 = { name: "Alice", age: 30, hobby: "Reading" };
const object2 = { age: 25, location: "New York", hobby: "Gaming" };

const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject);

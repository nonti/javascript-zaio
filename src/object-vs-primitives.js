//objects allow us to manage the structures of primitives

console.log("nonty" === "nonty");
const names = 'nonty';
const obj1 = {};
const obj2 = {};
const obj = obj1;
obj.names = names;
console.log(obj1);


console.log(obj2); // compare reference addresses

console.log(obj1 === obj2); //




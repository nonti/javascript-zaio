const fruits = ["Apple", "Banana", "Pear", "Kiwi", "Orange", "Watermelon"];
const kiwiIndex = fruits.indexOf("Kiwi");
fruits.splice(kiwiIndex, 2);
console.log(fruits);
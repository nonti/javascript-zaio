const fruits = ["apple", "orange", "kiwi", "banana", "lemon", "grapes"];
/* 
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i], i);
} */

fruits.forEach((fruit, index) => {
    console.log(fruit, index);
})
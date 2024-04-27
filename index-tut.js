console.log("Uber Profile");

let username = "nonts23";
let age = 24;
let isAdult = true;
let firstName = "Nonto";
let testUndefined = undefined;

console.log(typeof username);
console.log(username, age, firstName, isAdult, testUndefined);

/*
You are given a simple JavaScript code snippet that uses let and const to declare variables. Your task is to identify and fix the bug in the code by replacing the incorrect variable declaration with the appropriate one (either let or const). This challenge will help you understand the difference between let and const in JavaScript.
 */

const pi = 3.14159;
let radius = 5;
const area = pi * radius * radius;
radius = 7;
/**Solution you have to create a function */
function calculateArea() {
    const pi = 3.14159;
    let radius = 7;
    const area = pi * radius * radius;
    console.log(area);
    return area;
}

console.log(calculateArea());

// let price = 20;
// const summerDiscount = 5;
// const winterDiscount = 10;

// let summerSale = false;

// if (summerSale) {
//     price = price - summerDiscount;
// } else {
//     price = price - winterDiscount;
// } 

// console.log("Final Price: ", price);

//differantiation between var let and const
var price1 = 20;
const summerDis = 5;
const winterDis = 10;

let summerSales = true;

if (summerSales) {
    const price1 = price1 - summerDis;// this is only valid in this block
    console.log("summerSales", price1);
} else {
    const price1 = price1 - winterDis;
    
}

console.log("Final Price: ", price1);
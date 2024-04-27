const products = [
        { name: "milk", price: 45, quantity: 2 },
        { name: "sugar", price: 35, quantity: 5 },
        { name: "flour", price: 55, quantity: 1 },
        { name: "salt", price: 12, quantity: 1 }
];
    
function getTotalPrice(products) {
    return products.reduce((sum,product) => sum += product.price, 0) ;
}

function getProductNames(products) {
    return products.map((product) => product.name);
}

function getProductWithHieghestPrice(products) {
    return products.reduce((high, higher) => high.price > higher.price ? high : higher);  
}
function getProductNamesAndQuantity(products) {
    return products.map((product => ({ name: product.name, quantity: product.quantity })));    
}

console.log(getTotalPrice(products));
console.log(getProductNames(products));
console.log(getProductWithHieghestPrice(products));


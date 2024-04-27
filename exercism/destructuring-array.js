let number = [1, 2, 3, 4, 5, 6];

// this extracts the first three elements of array and assign them to the newly create variables.
let [fistNumber, secondNumber, thirdNumber] = number;
console.log(fistNumber, secondNumber, thirdNumber);

// nested array

let nestedArr = [[1, 2], [3, 4], [5, 6]];
let [firstArr, secondArr] = nestedArr;
console.log(firstArr, secondArr);

// object destructuring

let car = { brandName: "Honda", color: "red" };
let { brandName } = car;
console.log(brandName);


const car1 = {
    brand: "Honda",
    year: 2016,
    color: "blue"
}

let { brand, year } = car1;
console.log(brand, year);



//Nested objects
let address = { street: "12 Benoni Street", city: "San Francisco", state: "CA" };
let person = { name: "John Doe", age: 24, address };
//destructuring nested 
let { name, age, address: { city } } = person;
console.log(name, age, city);

//default values
const job = {
    role: "Software engineer",
    salary: 20000,
    applicationLink: "meta.com/careers/SWE-role/apply"
};

// adding default value isRemote in case it is not present in job object
let { role, salary, isRemote = false } = job;
console.log(isRemote);

// change the name of property using and alias
const job2 = {
    role: "Software Engineer",
    salary: 20000,
    applicationLink: "meta.com/careers/SWE-role/apply"
};

let { role: jobTitle, salary1, isRemote1 } = job;
console.log(jobTitle);



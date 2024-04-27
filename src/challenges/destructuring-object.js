/**
Your task is to complete the following functions without using loops, classes, or arrays. Instead, use object destructuring to extract information from the employees array.
Function 1: getTotalSalary(employees)
Return the total salary of all employees.
Function 2: getEmployeeNames(employees)
Return an array of names of all employees
Function 3: getEmployeeWithHighestSalary(employees)
Return the employee with the highest salary.
Function 4: getEmployeeAgesAndNames(employees)
Return an array of objects with the age and name of each employee.
Hints;
Use destructuring assignment to extract the required properties from the employee objects.
You can use functions like reduce, map, and sort to perform operations without using loops explicitly.

 */

const employees = [
    { id: 1, name: "Alice", age: 28, salary: 50000 },
    { id: 2, name: "Bob", age: 35, salary: 60000 },
    { id: 3, name: "Charlie", age: 30, salary: 55000 },
];

function getTotalSalary(employees) {
    return employees.reduce((sum, employee) => sum + employee.salary, 0);
}

function getEmployeeNames(employees) {
    return employees.map((employee) => employee.name);
}

function getEmployeeWithHighestSalary(employees) {
    return employees.reduce((old, current) => old.salary > current.salary ? old : current);
}

function getEmployeeAgesAndNames(employees) {
    return employees.map((employee => ({ name: employee.name , age: employee.age})));
}

console.log(getTotalSalary(employees));
console.log(getEmployeeNames(employees));
console.log(getEmployeeWithHighestSalary(employees));
console.log(getEmployeeAgesAndNames(employees));


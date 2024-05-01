/**
Task 1: Sum of Prime Numbers
Write a function sumOfPrimes(n) that takes an integer n as its parameter and returns the sum of the first n prime numbers. For example, if n is 3, the function should return 10 (2 + 3 + 5).Task 2: Perfect Powers
Write a function findPerfectPowers(limit) that takes an integer limit as its parameter and finds all perfect powers of two within the given limit. A perfect power is defined as a number that can be expressed as 2^k, where k is a non-negative integer. The function should return an array of all perfect powers found, sorted in ascending order.
Hints:
For Task 1, you'll need a function to check whether a number is prime. You can create a separate function for this.
For Task 2, you can use a loop to iterate through numbers and check if they are perfect powers of two.
For Task 3, think about how each row of Pascal's Triangle depends on the previous row.

 */


function sumPrimes(num) {
    let sum = 0;
    for (let x = 2; x <= num; x++){
        if (isPrime(x)) {
            sum += x;
        }
    }
    return sum;
}

function isPrime(n) {
    const sqrt = Math.sqrt(n);
    for (let i = 2; i <= sqrt; i++){
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

function findPerfectPowers(limit) {
    let power = 0;
    let array = [];
    while (Math.pow(2, power) <= limit) {
        array.push(Math.pow(2, power));
        power++;
    }
    return array;
}

console.log(sumPrimes(11));
console.log(findPerfectPowers(50));
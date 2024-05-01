/**
 * You are tasked with implementing a JavaScript function that generates prime numbers up to a given limit. A prime number is a natural number greater than 1 that has no divisors other than 1 and itself.
2) You need to write a function named generatePrimes that takes an integer limit as its argument and returns an array containing all prime numbers less than or equal to the given limit.
3) You should implement an efficient algorithm for generating prime numbers. Brute force methods will not be sufficient for this challenge.
Hint:
To efficiently generate prime numbers, consider implementing the Sieve of Eratosthenes algorithm. This algorithm helps you find all prime numbers up to a certain limit by iteratively eliminating multiples of primes found during the process.
 */

function generatePrimes(limit) {
    let store = [],
        primes = [];
    for (let x = 2; x < limit; ++x){
        if (!store[x]) {
            primes.push(x);
            for (let y = x << 1; y <= limit; y += x) {
                store[y] = true;
            }
        }
    }
    return primes;
}

console.log(generatePrimes(10));
console.log(generatePrimes(50));
console.log(generatePrimes(100));
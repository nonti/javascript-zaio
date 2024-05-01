/**
1) Write a function named isPrime that takes an integer n as its parameter and returns true if n is a prime number, and false otherwise.
2) A prime number is a positive integer greater than 1 that has no positive integer divisors other than 1 and itself.
3) You are not allowed to use any external libraries or built-in functions that directly check for prime numbers.
4) Your solution should be efficient and capable of handling large inputs.
5) Print the output according to the test case given below.
 */

function isPrime(n) {
    if (n < 2 ) {
        return false;
    }
    for (let x = 2; x <= Math.sqrt(n); x++) {
        if (n % x === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(2));
console.log(isPrime(7));
console.log(isPrime(4));
console.log(isPrime(11));
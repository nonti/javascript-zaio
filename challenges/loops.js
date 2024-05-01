/**
) You are tasked with writing a JavaScript function that counts the number of prime numbers in a given range.
2) Your function should take two integer parameters, start and end, representing the inclusive range of numbers to check for prime numbers. You need to return the count of prime numbers within this range.
3) After writing function, print the output according to the test case given below.
Hints:
A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. To check for primality, you might need to use a loop.
You can use a for loop to iterate through the numbers in the given range. Start with start and go up to end.
For each number in the range, you'll need to check if it's a prime number. To do this, you can use another loop to test whether the number is divisible by any other number in a specific range.
To optimize your solution, consider that you don't need to check divisibility by all numbers up to n to determine if n is prime. Think about what's the maximum number you need to check
Constraints:
The start and end parameters are both integers.
 */
let number = 0;
function countPrimes(start, end) {
    let number = 0;
    for (let i = start; i <= end; i++) {
        let isPrime = true;
        if (i <= 1) {
            isPrime = false;
        } else {
            for (let x = 2; x <= Math.ceil(Math.sqrt(i)) && isPrime; x++) {
                if (i % x === 0) {
                    isPrime = false;
                }
            }
        }
        if (isPrime) {
            number++;
        }
    }
    return number;
}

console.log(countPrimes(1, 11));
console.log(countPrimes(20, 45));
console.log(countPrimes(15, 15));
console.log(countPrimes(1, 3));
console.log(countPrimes(100, 200));

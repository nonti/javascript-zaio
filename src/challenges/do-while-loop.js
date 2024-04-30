/**
Write a JavaScript function that takes an integer as input and returns the reverse of that integer using a do-while loop. For example, if the input is 12345, the function should return 54321. If the input is -987, the function should return -789.
Constraints:
The input integer will be within the range of a 32-bit signed integer (-2^31 to 2^31 - 1).
Input:
number (integer): An integer to be reversed. It can be positive or negative.
Hints:
Initialize a variable to store the result.
Use a do-while loop to extract digits from the input number until it becomes zero.
Within the loop, you can extract the last digit of the number using the modulus operator (%) and append it to the result.
Update the input number by removing the last digit using integer division (/).
Make sure to handle negative numbers appropriately, preserving the sign.
Don't forget to consider integer overflow.
 */

function reverseNumber(number) {
    let isNegative = number < 0;
    number = Math.abs(number);
    let reversed = 0;
    do {
        reversed = reversed * 10 + (number % 10);
        number = Math.floor(number / 10);
    } while (number > 0);

    if (isNegative) {
        reversed *= -1;
    }
    return reversed;
}

console.log(reverseNumber(12345));
console.log(reverseNumber(-987));
console.log(reverseNumber(876543210));
console.log(reverseNumber(1000000007));

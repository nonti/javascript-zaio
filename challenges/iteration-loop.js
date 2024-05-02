/**
You are given an array of integers. Your task is to write a JavaScript function that finds the longest consecutive sequence of numbers in the array. A consecutive sequence is a sequence of numbers in which each number is one greater than the previous number.
2) Write a function findLongestConsecutiveSequence(arr) that takes an array of integers as input and returns the length of the longest consecutive sequence found in the array. If no consecutive sequence is found, the function should return 0.
3) Print the output according to the test cases given below.
 */

function findLongestConsecutiveSequence(arr) {
    if (arr.length === 0) {
        return 0;
    }
    const uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a, b) => a - b);
    let longestSequence = 1;
    let currentSequence = 1;

    for (let i = 1; i < uniqueArr.length; i++) {
    if (uniqueArr[i] === uniqueArr[i - 1] + 1) {
      currentSequence++;
    } else if (arr[i] !== arr[i - 1]) {
      currentSequence = 1;
    }
    
    longestSequence = Math.max(longestSequence, currentSequence);
  }
  
  return longestSequence;

}

const arr1 = [4, 8, 7, 10, 12, 15];
console.log(findLongestConsecutiveSequence(arr1));
const arr2 = [];
console.log(findLongestConsecutiveSequence(arr2)); 

const arr3 = [1];
console.log(findLongestConsecutiveSequence(arr3));

const arr4 = [1, 3, 5, 7, 9];
console.log(findLongestConsecutiveSequence(arr4)); 

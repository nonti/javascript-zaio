function isPalindrome(str) {
    let strClean = str.replace(/[ ,?]/g, "").toLowerCase();
    let left = 0;
    let right = strClean.length - 1;
    while (left < right) {
        if (strClean[left] !== strClean[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("A man, a plan, a canal, panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello world"));
console.log(isPalindrome("Was it a car or a cat I saw?"));
/**
1) Here's a coding challenge that is not working. Now, you have to find the bug and resolve it.
2) Modify the code and print the appropriate message based on the test case shown below.
 */

function printBackward() {
    const str = "Hello, World!";
    let reversedString = "";


    for (let i = str.length - 1; i >= 0; i--){
        reversedString += str[i];
        
    }

    console.log(reversedString);
}

printBackward();
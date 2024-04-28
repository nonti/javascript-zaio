// Lops are handy, if you want to run same code over and over again
// each time with a different value

//Make a string to uppercase using the .charAt function

const text = "nonty kwesie";
// for (statement1; statement2; statement3){
// }
let finalValue = "";
for (let i = 0; i < text.length; i++) {
    finalValue += text.charAt(i).toUpperCase();
    
}

console.log(finalValue);
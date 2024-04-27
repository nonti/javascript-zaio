
console.log(Boolean(45));
//if the string is empty its a falsy value
console.log(Boolean(""));
//Zero is a falsy value
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(Nan));

const num = 45;
if (num) {
    console.log("Run the program");
} else {
    console.log("End the program");  
}
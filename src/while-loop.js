const text = "Hello, world!";
let finalValue = "";

let i = 0;
while (i < text.length) {
    finalValue += text.charAt(i).toUpperCase();
    i++;
}
console.log(finalValue);

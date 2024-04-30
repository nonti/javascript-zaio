const text = "nonty mbows";
let i = 0;
let finalValue = "";
do {
    finalValue += text.charAt(i).toUpperCase();
        i++;
}
while (i < text.length);
console.log(finalValue);
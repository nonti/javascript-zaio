const character = "#";
const count = 8;
const rows = [];

//Chabge to a  different loop
for (let i = 1; i <= count; i++){
    rows.push(padRow(i , count));
}

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

/* while(rows.length < count) {
    rows.push(padRow(rows.length + 1, count));
} */

//upside down pyramid
/* for (let i = count; i > 0; i--){
    rows.push(padRow(i, count));
} */

let result = "";
for (const row of rows) {
    result = result + "\n" + row
}
console.log(result);

//print loop backwards
/* const numbers = [1, 2, 3];
const shifted = numbers.shift();
console.log(shifted); */
//unshift add value to the begining of the array
/* const unshifted = numbers.unshift(5);
console.log(unshifted);
console.log(numbers); */

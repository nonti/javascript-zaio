const character = "#";
const count = 8;
const rows = [];

//Change to a  different loop
for (let i = 1; i <= count; i++){
    rows.unshift(padRow(i , count));
}

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

let result = "";
for (const row of rows) {
    result = result + "\n" + row
}
console.log(result);
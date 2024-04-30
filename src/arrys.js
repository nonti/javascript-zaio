const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1){
    rows.push(character.repeat(i + 1));
    
}

let result = "";

//for of loop only iterate over eact item in an iterable object and temporarily assigns it to a variable
for (const row of rows) {
    result = result + "\n" +  row;
}
console.log(result);


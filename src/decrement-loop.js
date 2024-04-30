//decrement
let acc = "";
for (let x = 200; x >= 0; x = x - 5) {
    acc = acc +" , "+ x;
}
console.log(acc.toString());


for (let x = 7; x >= 0; x--){
	let acc = "";
	for(let a = 0; a< x + 1; a++){
		acc += "*";
	}
	console.log(acc);
}

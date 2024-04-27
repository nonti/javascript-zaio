// Consolidating Truthy & Falsy values
/* !undefined
/ Boolean(NaN)
/ false === false
/ 23 === "23"
/ 23 == "23"
/ "Hello" == "hello"
/ "Hello" === "Hello"
/ Boolean(0)
/ Boolean("0")
/ Boolean("")
/* !null
/* !!"hello" */
console.log(!undefined);
console.log(Boolean(NaN));
console.log(false === false);
console.log(23 === "23");
console.log(23 == "23");
console.log("Hello" == "hello");
console.log("Hello" === "Hello");
console.log(Boolean(0));
console.log( Boolean("0"));
console.log(Boolean(""));
console.log(!null);
console.log(!!"hello");

// List all Falsy values
// undefined
// Nan
// Boolean("")
// null
// Boolean(0)

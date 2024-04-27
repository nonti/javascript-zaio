//Ternary operators
// &&   || ()

//Premium user example
const isPremium = true;
let color1 = "grey";

// if (isPremium) {
//     color = "white";
// } else {
//     color = "grey";
// }

let color = isPremium ? "red" : "grey";
document.body.style.backgroundColor = color;


//age example
// age < 8 hi kiddo
// >= 8 hey there
const age = 8;
const greeting  = (age < 8) ? "Hey kiddo" : "Hey there";
// if (age < 8 ) {
//     console.log("Hey kiddo");
// } else if (age > 8) {
//     console.log("HI there");
// }
//only good for short statements


//
// String year = credits < 30 ? "freshman" : credits <= 59 ? "sophomore" : credits <= 89 ? "junior" : "senior";

//Avoid direct comparisons

const user = "user-data";
if (user) {
    console.log("Allowed to the platform");
} else {
    console.log("Not allowed into the platform");
}

//use === strict equal operators
console.log("25" === 25);
// "25" is atruthy value and 25 is a truthy value

//convert to real bool values where possible
console.log(Boolean(Nan)=== Boolean(NaN));
//== vs ===

// const age = 23;

// if (age < 18) {
//     console.log("User is an adult");
// } else {
//     console.log("User is a mionor");
// }


//admin, customer, enterprise
const userType = "admin";

if (userType == "admin") {
    console.log("admin user logged in");
} else if (userType == "customer") {
    console.log("customer logged in");
} else {
    console.log("enterprise logged in");
}


const age = "18";

if (age === 18) {
    console.log("you are an adult");
} else {
    console.log("not an adult");
}
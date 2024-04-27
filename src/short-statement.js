//short statements for ternary
const userType = "admin";
const age = 22;
let greeting;

if (userType === "admin") {
    if (age < 18) {
        greeting = "You are not allowed here";
    } else {
        greeting = "Welcome admin user";
    }
}  else {
        greeting = "enterprise user logged in";
    }

console.log("Greeting", greeting);
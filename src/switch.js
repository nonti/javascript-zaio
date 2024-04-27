//super-usr, admin, customer, enterprise

const userType = "super-admin";
//This is messy and a big chain
// if (userType == "admin") {
//     console.log("Admin User  logged in")
// }
// if (userType == "superUser") {
//     console.log("Super User logged in")
// }
// if (userType == "root") {
//     console.log("Root User  logged in")
// }
// if (userType == "customer") {
//     console.log("Customer User  logged in")
// }
// if (userType == "enterprise") {
//     console.log("Enteprise User  logged in")
// }

//only comparing one value
switch (userType) {
    case "root":
        console.log("Root User  logged in");
        break;
    case "super-admin":
        console.log("SuperAdmin  logged in");
        break;
    case "admin":
        console.log("Admin User  logged in");
        break;
    case "customer":
        console.log("Customer User  logged in");
        break;
    case "enterprise":
        console.log("Enterprise User  logged in")
        break;
    default:
        console.log("No user logged in");
}

console.log("Done");
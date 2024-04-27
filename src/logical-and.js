//logical &&
// checks if both conditions are true

//collecting data from the form name, age, password, hobbies, profile picture, biodata
const username = "nonty";
const password = "nont676";

if (!username && !password) {
    console.log("Please enter a username and passwordcorrectly");
}

//evaluate to true if one condition is true
if (!username || !password) {
    console.log("Please enter a username and passwordcorrectly");
}

//not going through the block if password is empty coz username is true
if (username === "" && password === "") {
    console.log("Please enter a username and password correctly");
} else {
    console.log("Not going through the block");
}


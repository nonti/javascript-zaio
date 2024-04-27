//creating a bot to greet correctly
//if morning greet Good morning
//afternoon greet Good Afrternoon
// nigh greet Good night

const time = "morning";

switch (time) {
    case "morning":
        console.log("Good Morning!");
        break;
    case "afternoon":
        console.log("Good Afternoon!");
        break;
    case "night":
        console.log("Good Night!");
        break;
    default:
        console.log("Hi");
}
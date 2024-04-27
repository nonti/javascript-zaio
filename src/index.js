//dark mode : black
//sunmode: yellow
//skymode: blue

const darkmode = false;
const sunmode = true;
const skymode = false;

if (darkmode) {
    document.body.style.background = "black";
} else if (skymode) {
    document.body.style.background = "blue";
} else {
    document.body.style.background = "yellow"
}
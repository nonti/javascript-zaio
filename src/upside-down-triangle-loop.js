
function printTriangle(height, direction) {
    if (direction === "up") {
        for (let i = 1; i <= height; i++) {
            let row = "";
            for (let j = 1; j <= i; j++) {
                row += "*";
            }
            console.log(row);
        }
    } else if (direction === "down") {
        for (let i = height; i >= 1; i--) {
            let row = "";
            for (let j = 1; j <= i; j++) {
                row += "*";
            }
            console.log(row);
        }
    } else {
        console.log("Invalid direction! Please use Up or down");
    }
}
printTriangle(5, "up");
printTriangle(4, "down");
printTriangle(1, "up");
printTriangle(1, "down");


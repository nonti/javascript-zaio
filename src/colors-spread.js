const primaryColors = {
    red: "red-hexcode",
    blue: "blue"
};


const secondaryColors = {
    grey: "grey",
    black: "black"
};

const allColors = {
    //use spread operator 
    ...primaryColors,
    ...secondaryColors,
    // add getColor function that takes 1 param of color and returns
    getColor(color) {    
        return this[color];
    }

};

// console.log(allColors.getColor("red"));
/* if you are using this outside the object no need for this keyword 
const getColor = (color) => {
    return allColors[color];

}*/

console.log(getColor("red"));
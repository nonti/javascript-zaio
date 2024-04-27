/**Create a simple shop application (JavaScript only)
You have a R200.00 note which you can spend at the shop, use a variable to capture the total and calculate the change by using functions for the calculations
There are multiple items that you would like to purchase.
Each item should be represented with a variable and have a cost.

Here is the menu:

chips: R20
coke: R13
sprite: R12
stoney: R12
hot dog: R25
burger: R50
fries: R15
ice cream: R20

Choose at least 4 items that you would like to purchase. Remember, you only have a R200 note and need to calculate the change that you will receive after you have purchased the items.
Use a function to calculate the result and return the result.
Use another function to log the result in the console.
For this challenge you do not need to pass any variables as parameters into the functions, just ensure that you use the functions to calculate and display the results and ensure to use the correct data types.
Ensure to follow all best practices that you have practiced up until now.
For submission, please zip your files and upload it to Google Classroom for grading.
Good luck and have fun!+6 */

const burger = 50;
const sprite = 12;
const iceCream = 20;
const fries = 15;

//This function will calculate the change of the amount spent
function purchase() {
    const totalCost = burger + sprite + iceCream + fries;
    const change = 200 - totalCost;
    return change;
}

const result = purchase();
//This function will log change
function logChange() {
    console.log(result);
}

logChange();

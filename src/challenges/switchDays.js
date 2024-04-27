/**
1) Modify the code and print the appropriate message based on the test case shown below.
2) You are given a simple JavaScript program with a switch case statement.
3) There is a bug in the code that prevents it from working correctly
4) Your task is to identify and fix the bug within the switch case statement.
5) Do not modify any code outside the switch case.
6) You must use the provided variable day as the input for the switch case.
7) Your goal is to ensure that the program outputs the correct message for the given value of day.
 */

let day = 'Monday';
//There is a bug in the switch case below. Fix it to display the correct message for the day
switch (day) {
    case 'Monday':
        console.log('It\'s the start of the week');
        break;
    case 'Tuesday':
        console.log('It\'s Tuesday');
        break;
    case 'Wednesday':
        console.log('It\'s Wednesday');
        break;
    case 'Thursday':
        console.log('It\'s Thursday');
        break;
    case 'Friday':
        console.log('It\'s Friday ');
        break;
    case 'Saturday':
        console.log('It\'s Saturday');
        break;
    case 'Sunday':
        console.log('It\'s Sunday');
        break;
    default:
        console.log('Invalid day')
}
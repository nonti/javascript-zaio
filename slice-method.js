// create a new array without modifying the original array

let tasks = ["Buy groceries", "Go for a run", "Clean the house", "Learn Javascript", "Learn CSS", "Learn Ruby", "Leran Java", "Pay bills"];
function getTasks(startIndex, endIndex) {
    
    // endIndex is up to but not included
    return tasks.slice(startIndex, endIndex);
}

let morningTask = getTasks(0, 1);
console.log(morningTask );
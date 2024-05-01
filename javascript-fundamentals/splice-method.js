
let tasks = ["Buy groceries", "Go for a run", "Clean the house", "Learn Javascript", "Learn CSS", "Learn Ruby", "Leran Java", "Pay bills"];

// Remove element from array
function removeTaskAtIndex(startIndex, deleteCount) {
    tasks.splice(startIndex, deleteCount);
}

removeTaskAtIndex(1, 2);
console.log(tasks);

//Add elements to array
function addTasks(startIndex, newTasks) {
    tasks.splice(startIndex, 0, ...newTasks);
}

addTasks(1, ["Attend seminar", "Visit grand ma"]);
console.log(tasks);

//Replace elements 
function replaceTasks(startIndex, deleteCount, newTask) {
    tasks.splice(startIndex, deleteCount, ...newTask);
}

replaceTasks(2, ["Call mom"]);
console.log(tasks);
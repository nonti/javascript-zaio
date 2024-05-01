// FIFO, First In, First Out
// to remove an element from an array

let tasks = ["Buy groceries", "Go for a run", "Clean the house", "Learn Javascript", "Learn CSS", "Learn Ruby", "Leran Java", "Pay bills"];

function removeTask() {
    return tasks.shift();
}

console.log("Removed Task: ", removeTask());
console.log(tasks);
//FIFO: First In, First Out

let tasks = ["Buy groceries", "Go for a run", "Clean the house", "Learn Javascript", "Learn CSS", "Learn Ruby", "Leran Java", "Pay bills"];

function addFirstTask(taskName) {
    tasks.unshift(taskName);
    return tasks.length;
}

console.log("New length: ", addFirstTask("Pick up a child"));
console.log(tasks);
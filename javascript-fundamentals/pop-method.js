//LIFO: Last In, First Out

let tasks = ["Buy groceries", "Go for a run", "Clean the house", "Learn Javascript", "Learn CSS", "Learn Ruby", "Leran Java", "Pay bills"];
function removeLastTask() {
    return tasks.pop();
}

console.log("Remove task", removeLastTask());
console.log(tasks);
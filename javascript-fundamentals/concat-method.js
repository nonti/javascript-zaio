//merge two arrays in to a single array

let tasks = ["Buy groceries", "Go for a run", "Clean the house", "Learn Javascript", "Learn CSS", "Learn Ruby", "Leran Java", "Pay bills"];

let morningTasks = ["Buy groceries", "Go for a run", "Clean the house","Read a book"];
let afternoonTasks = ["Learn Javascript", "Learn CSS", "Learn Ruby", "Leran Java", "Pay bills"];

function mergeTasks(arrays) {
    return arrays.reduce((acc, current) => acc.concat(current), []);
}

let allTask = mergeTasks([morningTasks, afternoonTasks]);
console.log(allTask);
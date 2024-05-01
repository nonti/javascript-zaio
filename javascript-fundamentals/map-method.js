let tasks = ["Buy groceries", "Read a book", "Go for a run", "Pay Bills"];

function enhanceTask() {
    return tasks.map((task, index) => {
        return {
            id: index + 1,
            description: task,
            completed: false
        };
    });
}

let detailedTasks = enhanceTask();
console.log("Detailed tasks: ");
detailedTasks.forEach(task => console.log(
    `ID: ${task.id},
    Description: ${task.description},
    Completed: ${task.completed}
    
`));
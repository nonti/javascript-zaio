let tasks = ["Buy groceries", "Read a book", "Go for a run", "Pay bills"];

function logTasks() {
    console.log("List all tasks");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
}   

logTasks();
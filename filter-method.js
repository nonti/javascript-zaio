let tasks = [
    { name: 'Buy grocercies', completed: true },
    { name: 'Learn a language', completed: false },
    { name: 'Read a book', completed: true },
    { name: 'Go for a run', completed: false },
    { name: 'Pay bills', completed: true },
    { name: 'Buy cleaning materials', completed: false }
];

function getCompletedTasks() {
    return tasks.filter(tasks => tasks.completed);
}

let completedTasks = getCompletedTasks();
console.log("Completed tasks: ");
completedTasks.forEach(task => console.log(task.name));
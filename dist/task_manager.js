"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = require("./task");
function getId(tasks) {
    const ids = tasks.map((tasks) => tasks.id);
    return ids.length > 0 ? Math.max(...ids) + 1 : 1;
}
function addTask(description) {
    const task = (0, task_1.readTasks)();
    const newTask = {
        id: getId(task),
        description,
        status: "pending"
    };
    task.push(newTask);
    (0, task_1.writeTasks)(task);
    console.log(`Task added successfully: ${newTask.id}`);
}
function updateTask(id, newDescription, newStatus) {
    const tasks = (0, task_1.readTasks)();
    const task = tasks.find(task => task.id === id);
    if (task) {
        if (newDescription != undefined) {
            task.description = newDescription;
        }
        if (newStatus != undefined) {
            task.status = newStatus;
        }
    }
    else {
        console.log(`Task with id ${id} not found`);
    }
}
function deleteTask(id) {
    let tasks = (0, task_1.readTasks)();
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id != id);
    (0, task_1.writeTasks)(tasks);
    if (tasks.length < initialLength) {
        console.log(`Deleted task with id: ${id}`);
    }
    else {
        console.log(`Task with id ${id} not found`);
    }
}
function changeTaskStatus(id, status) {
    const tasks = (0, task_1.readTasks)();
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.status = status;
        (0, task_1.writeTasks)(tasks);
        console.log(`Marked task with id ${id} as ${status}`);
    }
    else {
        console.log(`Task with id ${id} not found`);
    }
}
function listTasks(status) {
    const tasks = (0, task_1.readTasks)();
    if (status) {
        let filteredTasks = tasks.filter(task => task.status === status);
        console.log(`Listing tasks with status: ${status}`);
        filteredTasks.forEach(task => console.log(`[${task.id}] ${task.description} - ${task.status} `));
    }
    else {
        console.log("Listing all tasks: ");
        tasks.forEach(task => console.log(`[${task.id}]  ${task.description} - ${task.status}`));
    }
}
module.exports = {
    addTask, updateTask, deleteTask, changeTaskStatus, listTasks
};

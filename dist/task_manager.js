"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = addTask;
exports.updateTask = updateTask;
exports.deleteTask = deleteTask;
exports.changeTaskStatus = changeTaskStatus;
exports.listTasks = listTasks;
const fileUtils_1 = require("./utils/fileUtils");
function getId(tasks) {
    const ids = tasks.map((tasks) => tasks.id);
    return ids.length > 0 ? Math.max(...ids) + 1 : 1;
}
function addTask(description) {
    const task = (0, fileUtils_1.readTasks)();
    const newTask = {
        id: getId(task),
        description,
        status: "pending"
    };
    task.push(newTask);
    (0, fileUtils_1.writeTasks)(task);
    console.log(`Task added successfully: ${newTask.id}`);
}
function updateTask(id, newDescription, newStatus) {
    const tasks = (0, fileUtils_1.readTasks)();
    const taskId = parseInt(id, 10);
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        if (newDescription !== undefined) {
            task.description = newDescription;
        }
        if (newStatus !== undefined) {
            task.status = newStatus;
        }
        (0, fileUtils_1.writeTasks)(tasks);
        console.log(`Task with id ${id} updated successfully`);
    }
    else {
        console.log(`Task with id ${id} not found`);
    }
}
function deleteTask(id) {
    let tasks = (0, fileUtils_1.readTasks)();
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id != parseInt(id));
    (0, fileUtils_1.writeTasks)(tasks);
    if (tasks.length < initialLength) {
        console.log(`Deleted task with id: ${id}`);
    }
    else {
        console.log(`Task with id ${id} not found`);
    }
}
function changeTaskStatus(id, status) {
    const tasks = (0, fileUtils_1.readTasks)();
    const task = tasks.find((task) => task.id === parseInt(id, 10));
    if (task) {
        task.status = status;
        (0, fileUtils_1.writeTasks)(tasks);
        console.log(`Marked task with id ${id} as ${status}`);
    }
    else {
        console.log(`Task with id ${id} not found`);
    }
}
function listTasks(status) {
    const tasks = (0, fileUtils_1.readTasks)();
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

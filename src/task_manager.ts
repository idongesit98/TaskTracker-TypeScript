import { connect } from "http2";
import { readTasks, Task, writeTasks } from "./utils/fileUtils"

function getId(tasks: Task[]){
    const ids = tasks.map((tasks) => tasks.id)
    return ids.length > 0 ? Math.max(...ids) + 1 : 1
}

function addTask(description:string):void {
    const task = readTasks()
    const newTask:Task = {
        id:getId(task),
        description,
        status: "pending"
    };
    task.push(newTask);
    writeTasks(task) 
    console.log(`Task added successfully: ${newTask.id}`) 
}

function updateTask(id:number,newDescription?:string, newStatus?: "pending" | "in-progress" | "done"):void {
    const tasks = readTasks()
    const task = tasks.find(task => task.id === id)

    if (task) {
        if (newDescription != undefined) {
            task.description = newDescription
        }
        if (newStatus != undefined) {
            task.status = newStatus
        }     
    }else{
        console.log(`Task with id ${id} not found`)
    }
}

function deleteTask(id:number) {
    let tasks = readTasks()
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id != id)
    writeTasks(tasks)
    if (tasks.length < initialLength) {
        console.log(`Deleted task with id: ${id}`);
    }else{
        console.log(`Task with id ${id} not found`)
    }
}

function changeTaskStatus(id:number, status:"pending" | "in-progress" | "done") {
    const tasks = readTasks()
    const task = tasks.find(task => task.id === id)
    if (task) {
        task.status = status
        writeTasks(tasks)
        console.log(`Marked task with id ${id} as ${status}`)
    }else{
        console.log(`Task with id ${id} not found`)
    }
}

function listTasks(status:"pending" | "in-progress" | "done") {
    const tasks = readTasks()

    if(status){
        let filteredTasks = tasks.filter(task => task.status === status)
        console.log(`Listing tasks with status: ${status}`)

        filteredTasks.forEach(task => console.log(`[${task.id}] ${task.description} - ${task.status} `))
    }else {
        console.log("Listing all tasks: ")
        tasks.forEach(task => console.log(`[${task.id}]  ${task.description} - ${task.status}`))
    }
}

module.exports = {
    addTask, updateTask, deleteTask, changeTaskStatus, listTasks
}
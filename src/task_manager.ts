import { readTasks, Task, writeTasks } from "./utils/fileUtils"

function getId(tasks: Task[]){
    const ids = tasks.map((tasks) => tasks.id)
    return ids.length > 0 ? Math.max(...ids) + 1 : 1
}

 export function addTask(description:string):void {
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

export function updateTask(id:string, newDescription?:string, newStatus?: "pending" | "in-progress" | "done"):void {
    const tasks = readTasks()
    const taskId = parseInt(id,10);

    const task = tasks.find(task => task.id === taskId)

    if (task) {
        if (newDescription !== undefined) {
            task.description = newDescription
        }
        if (newStatus !== undefined) {
            task.status = newStatus
        }  
        writeTasks(tasks) 
        console.log(`Task with id ${id} updated successfully`)  
    }else{
        console.log(`Task with id ${id} not found`)
    }
}

export function deleteTask(id:string) {
    let tasks = readTasks()
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id != parseInt(id))
    writeTasks(tasks)
    if (tasks.length < initialLength) {
        console.log(`Deleted task with id: ${id}`);
    }else{
        console.log(`Task with id ${id} not found`)
    }
}

export function changeTaskStatus(id:string, status:"pending" | "in-progress" | "done") {
    const tasks = readTasks()
    const task = tasks.find((task) => task.id === parseInt(id,10))
    if (task) {
        task.status = status
        writeTasks(tasks)
        console.log(`Marked task with id ${id} as ${status}`)
    }else{
        console.log(`Task with id ${id} not found`)
    }
}

export function listTasks(status:"pending" | "in-progress" | "done") {
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


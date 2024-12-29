import fs from 'fs'
import path from 'path'
const taskFilePath = path.join(__dirname, "tasks.json")

export interface Task{
    id:number;
    description?:string;
    status: "pending" | "in-progress" | "done";
}

export function ensureFileExists(){
    if (!fs.existsSync(taskFilePath)) {
        fs.writeFileSync(taskFilePath, JSON.stringify([]));
    }
}
export function readTasks():Task[] {
   ensureFileExists()
   const data = fs.readFileSync(taskFilePath,"utf-8")
   return JSON.parse(data)
}

export function writeTasks(tasks: Task[]):void {
    try {
        fs.writeFileSync(taskFilePath, JSON.stringify(tasks,null,2), 'utf-8')
    } catch (error) {
        console.log("Error occured while writing task data file")
        process.exit(1)
    }
}

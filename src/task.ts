import { addTask, changeTaskStatus, deleteTask, listTasks, updateTask } from "./task_manager"

const command = process.argv[3]
const args = process.argv.slice(4)

switch(command) {
    case 'add':
        addTask(args[0]);
        break;

    case 'update':
        const id = args[0];
        const description = args[1];
        const status = args[2] as "pending" | "in-progress" | "done" | undefined

        if (!id) {
            console.error("Please provide the task ID.");
            break;
        }
        updateTask(id,description,status)
        console.log(id,description,status)
        break;

    case 'delete':
        deleteTask(args[0]);
        break;

    case 'mark':
        changeTaskStatus(args[0],args[1] as "pending" | "in-progress" | "done")
        break;
    
    case 'list':
        listTasks(args[0] as "pending" | "in-progress" | "done")
        break;
    default:   
        console.log('Unknown command. Use "add", "update", "delete", "mark", "list"'); 
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_manager_1 = require("./task_manager");
const command = process.argv[3];
const args = process.argv.slice(4);
switch (command) {
    case 'add':
        (0, task_manager_1.addTask)(args[0]);
        break;
    case 'update':
        const id = args[0];
        const description = args[1];
        const status = args[2];
        if (!id) {
            console.error("Please provide the task ID.");
            break;
        }
        (0, task_manager_1.updateTask)(id, description, status);
        console.log(id, description, status);
        break;
    case 'delete':
        (0, task_manager_1.deleteTask)(args[0]);
        break;
    case 'mark':
        (0, task_manager_1.changeTaskStatus)(args[0], args[1]);
        break;
    case 'list':
        (0, task_manager_1.listTasks)(args[0]);
        break;
    default:
        console.log('Unknown command. Use "add", "update", "delete", "mark", "list"');
}

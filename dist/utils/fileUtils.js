"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureFileExists = ensureFileExists;
exports.readTasks = readTasks;
exports.writeTasks = writeTasks;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const taskFilePath = path_1.default.resolve(__dirname, "../tasks.json");
function ensureFileExists() {
    if (!fs_1.default.existsSync(taskFilePath)) {
        fs_1.default.writeFileSync(taskFilePath, JSON.stringify([]));
    }
}
function readTasks() {
    ensureFileExists();
    const data = fs_1.default.readFileSync(taskFilePath, "utf-8");
    return JSON.parse(data);
}
function writeTasks(tasks) {
    try {
        fs_1.default.writeFileSync(taskFilePath, JSON.stringify(tasks, null, 2), 'utf-8');
    }
    catch (error) {
        console.log("Error occured while writing task data file");
        process.exit(1);
    }
}

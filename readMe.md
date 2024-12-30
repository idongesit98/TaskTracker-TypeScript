# Task Tracker

Sample solution for the [task-tracker](https://roadmap.sh/projects/task-tracker) challenge from [roadmap.sh](https://roadmap.sh/).

This is a simple command-line interface (CLI) application for managing tasks.

## Features

- Add new tasks with a unique ID and store it in `JSON` format.
- List tasks by their status: `to-do`, `in-progress`, or `done`.
- Update the description and/or status of an existing task.
- Delete tasks by their ID.
- Show status of tasks as `in-progress`, `done` or `to-do`.
- Mark status of tasks as `in-progress`, `done` or `to-do`.

## Prerequisites

- Node.js installed on your pc
## Installation

**Clone the Repository**

   ```bash
   git clone -- https://github.com/idongesit98/TaskTracker.git
   # Navigate to the project Directory
   cd [`Your project directory`]
   ```

   ```bash
   run npm install and then tsc to build your project
   ```bash
## Usage

- **Add a Task**
```bash
node dist/task.js task-tracker add "Testing Task Tracker"
```

- **Mark a Task**
```bash
node dist/task.js task-tracker mark 1 "in-progress"
```

- **List all Tasks**
```bash
node dist/task.js task-tracker list
```
- **Update a Task**
# You can update either status, description or both 
```bash
node dist/task.js task-tracker update 1 "Testing Task Tracker and coding"
```

- **Delete a Task**
```bash
# Delete the task by providing its ID 1
node dist/task.js task-tracker delete 1
```

### Sample JSON structure
```JSON
[
  {
    "id": 1,
    "description": "Testing Task Tracker and coding",
    "status": "to-do"
  }
]
```
import React, { useState } from "react";
import useTasks from "./hooks/useTasks";

function App() {
  const { tasks, addTask, removeTask, toggleTask } = useTasks();
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => toggleTask(index)}>Complete</button>
            <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

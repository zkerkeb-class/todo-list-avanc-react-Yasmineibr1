import React, { useState, useMemo } from "react";
import useTasks from "./hooks/useTasks";
import "./App.css"; 

function App() {
  const { tasks, addTask, removeTask, toggleTask } = useTasks();
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredTasks = useMemo(() => {
    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    } else if (filter === "uncompleted") {
      return tasks.filter((task) => !task.completed);
    }
    return tasks;
  }, [tasks, filter]);

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="input-container">
      <input
      type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={() => addTask(newTask)}>Add Task</button>
      </div>
      <div>
        <button className="button-all" onClick={() => setFilter("all")}>All</button>
        <button className="button-completed" onClick={() => setFilter("completed")}>Completed</button>
        <button className="button-uncompleted" onClick={() => setFilter("uncompleted")}>Uncompleted</button>
      </div>

      <ul>
        {filteredTasks.map((task, index) => (
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

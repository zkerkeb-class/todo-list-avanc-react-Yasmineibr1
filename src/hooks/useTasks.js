
import { useState } from "react";

function useTasks() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    if (text.trim() !== "") {
      setTasks([...tasks, { text, completed: false }]);
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return { tasks, addTask, removeTask, toggleTask };
}

export default useTasks;

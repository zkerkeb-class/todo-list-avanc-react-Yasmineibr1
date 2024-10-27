import { useState, useEffect, useCallback } from "react";

function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((text) => {
    if (text.trim()) {
      setTasks((prevTasks) => [...prevTasks, { text, completed: false }]);
    }
  }, []);

  const removeTask = useCallback((index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }, []);

  const toggleTask = useCallback((index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  return { tasks, addTask, removeTask, toggleTask };
}

export default useTasks;

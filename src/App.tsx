import "./App.css";
import "modern-normalize";
import initialTasks from "./data/tasks.json";
import { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import Filter from "./components/Filter/Filter";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";

function App() {
  // Ініціалізація tasks
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(window.localStorage.getItem("tasks")) || initialTasks;
  });

  // Ініціалізація currentColor
  const [currentColor, setCurrentColor] = useState(() => {
    return window.localStorage.getItem("backgroundColor") || "#90EE90";
  });

  const [filter, setFilter] = useState("");

  // Збереження tasks в localStorage при їх зміні
  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Збереження currentColor в localStorage при його зміні
  useEffect(() => {
    window.localStorage.setItem("backgroundColor", currentColor);
  }, [currentColor]);

  const handleChangeColor = (color) => {
    setCurrentColor(color);
  };

  const addTask = (newTask) => {
    setTasks((prev) => {
      return [...prev, newTask];
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prev) => {
      return prev.filter((task) => task.id != taskId);
    });
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLocaleLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Background
        currentColor={currentColor}
        onChangeColor={handleChangeColor}
      />
      <h1 className="title">Task Master</h1>
      <Form onAdd={addTask} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList tasks={filteredTasks} onDelete={deleteTask} />
      <p className="footer">Vite + React project - IraPrysiazhna</p>
    </div>
  );
}

export default App;

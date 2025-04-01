import "./App.css";
import "modern-normalize";
import initialTasks from "./data/tasks.json";
import { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";
import StatusFilter from "./components/StatusFilter/StatusFilter";
import TaskCounter from "./components/TaskCounter/TaskCounter";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import { Toaster } from "react-hot-toast";

function App() {
  // Ініціалізація tasks
  const [tasks, setTasks] = useState(() => {
    const storedTasks = window.localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : initialTasks;
  });

  // Ініціалізація currentColor
  const [currentColor, setCurrentColor] = useState(() => {
    return window.localStorage.getItem("backgroundColor") || "#92d192";
  });

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Збереження tasks в localStorage при їх зміні
  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Збереження currentColor в localStorage при його зміні
  useEffect(() => {
    window.localStorage.setItem("backgroundColor", currentColor);
  }, [currentColor]);

  const handleChangeColor = (color: string) => {
    setCurrentColor(color);
  };

  // const addTask = (newTask: any) => {
  //   setTasks((prev: any) => {
  //     return [...prev, newTask];
  //   });
  // };

  // const deleteTask = (taskId: any) => {
  //   setTasks((prev: any) => {
  //     return prev.filter((task: any) => task.id != taskId);
  //   });
  // };

  // const filteredTasks = tasks.filter((task: any) =>
  //   task.text.toLocaleLowerCase().includes(filter.toLowerCase())
  // );

  const currentYear = new Date().getFullYear();

  return (
    <div className="container">
      <Toaster />
      <div className="topWrapper">
        <div>
          <Background
            currentColor={currentColor}
            onChangeColor={handleChangeColor}
          />
          <h1 className="title">Enjoy your progress:</h1>

          <TaskCounter />
          <Form />
          <SearchFilter />
        </div>
        <div className="verticalSeparator"></div>
        <div className="filterWrapper">
          <StatusFilter />
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </div>
      <TaskList selectedCategory={selectedCategory} />
      <p
        className="footer"
        style={{
          textAlign: "center",
          padding: "20px",
          fontSize: "14px",
          borderTop: "1px solid #ddd",
          color: "#333",
          fontFamily: "Arial, sans-serif",
        }}
      >
        © {currentYear} Ira Prysiazhna. All rights reserved.
      </p>
    </div>
  );
}

export default App;

import css from "./TaskList.module.css";
import Task from "../Task/Task";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { deleteTask } from "../../redux/tasksSlice";
import { useState } from "react";

type TaskListProps = {
  tasks: { id: string | number; text: string }[];
  onDelete: (id: string | number) => void;
};

type Task = {
  id: string | number;
  text: string;
  completed: boolean;
  category: string;
};

const getVisibleTasks = (
  tasks: Task[],
  statusFilter: "active" | "completed" | "all",
  textFilter: string,
  selectedCategory: string
): Task[] => {
  return tasks
    .filter((task) => {
      if (statusFilter === "active") return !task.completed;
      if (statusFilter === "completed") return task.completed;
      return true;
    })
    .filter((task) =>
      task.text.toLowerCase().includes(textFilter.toLowerCase())
    )
    .filter(
      (task) => selectedCategory === "All" || task.category === selectedCategory
    );
};

export default function TaskList() {
  const dispatch = useDispatch();

  //Отримуємо масив завдань із стану Redux
  const tasks = useSelector((state: RootState) => state.tasks.items);

  //Отримуємо значення фільтра із стану Redux
  const statusFilter = useSelector((state: RootState) => state.filters.status);
  const textFilter = useSelector((state: RootState) => state.filters.text);

  // Стан для обраної категорії
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Отримуємо унікальні категорії
  const categories = ["All", ...new Set(tasks.map((task) => task.category))];

  //Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  const visibleTasks = getVisibleTasks(
    tasks,
    statusFilter,
    textFilter,
    selectedCategory
  );

  // Групуємо завдання за категоріями
  const groupedTasks = visibleTasks.reduce<{ [key: string]: Task[] }>(
    (acc, task) => {
      acc[task.category] = acc[task.category] || [];
      acc[task.category].push(task);
      return acc;
    },
    {}
  );

  // Функція для видалення завдання
  const handleDelete = (id: string | number) => {
    dispatch(deleteTask(id)); // Видаляємо завдання через Redux
  };

  return (
    <div className={css.taskList}>
      <div className={css.btnWrapper}>
        {/* Фільтр по категоріях */}
        <h3 className={css.title}>Filter your tasks by categorieory:</h3>
        <div className={css.filterButtons}>
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? css.active : css.btn}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Відображення завдань за категоріями */}
      {Object.keys(groupedTasks).map((category) => (
        <div key={category} className={css.category}>
          <h3 className={css.title}>{category}</h3>
          <ul className={css.list}>
            {groupedTasks[category].map((task) => (
              <li className={css.item} key={task.id}>
                <Task task={task} onDelete={handleDelete} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

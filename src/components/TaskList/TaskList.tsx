import css from "./TaskList.module.css";
import Task from "../Task/Task";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { deleteTask } from "../../redux/tasksSlice";

type TaskListProps = {
  tasks: { id: string | number; text: string }[];
  onDelete: (id: string | number) => void;
};

type Task = {
  id: string | number;
  text: string;
  completed: boolean;
};

const getVisibleTasks = (
  tasks: Task[],
  statusFilter: "active" | "completed" | "all",
  textFilter: string
): Task[] => {
  return tasks
    .filter((task) => {
      if (statusFilter === "active") return !task.completed;
      if (statusFilter === "completed") return task.completed;
      return true;
    })
    .filter((task) =>
      task.text.toLowerCase().includes(textFilter.toLowerCase())
    );
};

export default function TaskList() {
  const dispatch = useDispatch();

  //Отримуємо масив завдань із стану Redux
  const tasks = useSelector((state: RootState) => state.tasks.items);

  //Отримуємо значення фільтра із стану Redux
  const statusFilter = useSelector((state: RootState) => state.filters.status);
  const textFilter = useSelector((state: RootState) => state.filters.text);

  //Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  const visibleTasks = getVisibleTasks(tasks, statusFilter, textFilter);

  // Функція для видалення завдання
  const handleDelete = (id: string | number) => {
    dispatch(deleteTask(id)); // Видаляємо завдання через Redux
  };

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.item} key={task.id}>
          <Task task={task} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}

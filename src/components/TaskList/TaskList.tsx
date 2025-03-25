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
  statusFilter: "active" | "completed" | "all"
): Task[] => {
  switch (statusFilter) {
    case "active":
      return tasks.filter((task) => !task.completed);
    case "completed":
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

export default function TaskList() {
  const dispatch = useDispatch();

  //Отримуємо масив завдань із стану Redux
  const tasks = useSelector((state: RootState) => state.tasks.items);

  //Отримуємо значення фільтра із стану Redux
  const statusFilter = useSelector((state: RootState) => state.filters.status);

  //Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

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

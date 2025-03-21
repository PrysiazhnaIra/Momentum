import css from "./TaskList.module.css";
import Task from "../Task/Task";

type TaskListProps = {
  tasks: { id: string | number; text: string }[];
  onDelete: (id: string | number) => void;
};
export default function TaskList({ tasks, onDelete }: TaskListProps) {
  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li className={css.item} key={task.id}>
          <Task data={task} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

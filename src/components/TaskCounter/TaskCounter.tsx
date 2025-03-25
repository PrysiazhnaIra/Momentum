import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function TaskCounter() {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector((state: RootState) => state.tasks.items);

  type TaskCount = {
    active: number;
    completed: number;
  };

  // На базі стану Redux отримуємо похідні дані
  const count = tasks.reduce(
    (accumulator: TaskCount, task: { completed: boolean }) => {
      if (task.completed) {
        accumulator.completed += 1;
      } else {
        accumulator.active += 1;
      }
      return accumulator;
    },
    { active: 0, completed: 0 } as TaskCount
  );

  return (
    <div>
      <p>Active: {count.active}</p>
      <p>Completed: {count.completed}</p>
    </div>
  );
}

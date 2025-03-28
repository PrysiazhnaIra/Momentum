import { useDispatch } from "react-redux";
import css from "./Task.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteTask, toggleCompleted } from "../../redux/tasksSlice";

type TaskProps = {
  task: {
    id: string | number;
    text: string;
    completed: boolean;
  };
  onDelete: (id: string | number) => void;
};

export default function Task({ task: { id, text, completed } }: TaskProps) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleCompleted(id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  return (
    <>
      <div className={css.container}>
        <input
          type="checkbox"
          className={css.checkbox}
          checked={completed}
          onChange={handleToggle}
        />
        <p className={css.text}>{text}</p>
        <button className={css.btn} onClick={handleDelete}>
          <RiDeleteBin5Line className={css.dltIcon} />
        </button>
      </div>
    </>
  );
}

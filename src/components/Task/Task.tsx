import css from "./Task.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";

type TaskProps = {
  task: {
    id: string | number;
    text: string;
    completed: boolean;
  };
  onDelete: (id: string | number) => void;
};

export default function Task({
  task: { id, text, completed },
  onDelete,
}: TaskProps) {
  return (
    <>
      <div className={css.container}>
        <input type="checkbox" className={css.checkbox} checked={completed} />
        <p className={css.text}>{text}</p>
        <button className={css.btn} onClick={() => onDelete(id)}>
          <RiDeleteBin5Line className={css.dltIcon} />
        </button>
      </div>
    </>
  );
}

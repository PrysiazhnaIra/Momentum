import css from "./Task.module.css";

type TaskProps = {
  data: {
    id: string | number;
    text: string;
  };
  onDelete: (id: string | number) => void;
};

export default function Task({ data: { id, text }, onDelete }: TaskProps) {
  return (
    <>
      <div className={css.container}>
        <p className={css.text}>{text}</p>
        <button className={css.btn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </>
  );
}

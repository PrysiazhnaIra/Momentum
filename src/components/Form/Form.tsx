import css from "./Form.module.css";
import { IoAddCircleOutline } from "react-icons/io5";

type FormProps = {
  onAdd: (task: { id: string | number; text: string }) => void;
};

export default function Form({ onAdd }: FormProps) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const taskText = e.target.elements.text.value; // доступ до значення поля
    if (taskText.trim()) {
      // перевірка, чи поле не є порожнім
      onAdd({
        id: Date.now(),
        text: taskText,
      });
      e.target.reset();
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter your task..."
      />
      <button type="submit" className={css.btn}>
        <IoAddCircleOutline className={css.addIcon} />
      </button>
    </form>
  );
}

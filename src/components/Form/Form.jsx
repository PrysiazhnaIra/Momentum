import css from "./Form.module.css";

export default function Form({ onAdd }) {
  const handleSubmit = (e) => {
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
      <input className={css.field} type="text" name="text" />
      <button type="submit" className={css.btn}>
        Add task
      </button>
    </form>
  );
}

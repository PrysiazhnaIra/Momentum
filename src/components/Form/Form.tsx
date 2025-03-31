import { useDispatch } from "react-redux";
import css from "./Form.module.css";
import { IoMdAdd } from "react-icons/io";
import { addTask } from "../../redux/tasksSlice";
import { FormEvent } from "react";

type FormProps = {
  onAdd: (task: { id: string | number; text: string }) => void;
};

export default function Form() {
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const textInput = form.elements.namedItem("text") as HTMLInputElement;

    const text = textInput.value.trim();
    if (text === "") return;

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    dispatch(addTask(newTask));
    form.reset();
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
        <IoMdAdd className={css.addIcon} />
      </button>
    </form>
  );
}

import { useDispatch } from "react-redux";
import css from "./Form.module.css";
import { IoMdAdd } from "react-icons/io";
import { addTask } from "../../redux/tasksSlice";
import { FormEvent, useState } from "react";

type FormProps = {
  onAdd: (task: { id: string | number; text: string }) => void;
};

export default function Form() {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [category, setCategory] = useState("Study");

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
      category,
    };

    dispatch(addTask(newTask));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={css.selectWrapper}
      >
        <option value="Study">Study</option>
        <option value="Work">Work</option>
        <option value="Homehold">Homehold</option>
      </select>
      <div className={css.inputsWrapper}>
        <input
          className={css.field}
          type="text"
          name="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your new task..."
        />

        <button type="submit" className={css.btn}>
          <IoMdAdd className={css.addIcon} />
        </button>
      </div>
    </form>
  );
}

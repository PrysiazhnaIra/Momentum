import css from "./Filter.module.css";
import { CiSearch } from "react-icons/ci";

export default function Filter({ value, onFilter }) {
  return (
    <div className={css.inputContainer}>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
      {!value && <CiSearch className={css.searchIcon} />}
    </div>
  );
}

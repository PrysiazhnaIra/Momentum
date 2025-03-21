import css from "./Filter.module.css";
import { CiSearch } from "react-icons/ci";

type FilterProps = {
  value: string;
  onFilter: (filterText: string) => void;
};

export default function Filter({ value, onFilter }: FilterProps) {
  return (
    <div className={css.inputContainer}>
      <input
        type="text"
        value={value}
        placeholder="Search your task..."
        onChange={(e) => onFilter(e.target.value)}
      />
      {!value && <CiSearch className={css.searchIcon} />}
    </div>
  );
}

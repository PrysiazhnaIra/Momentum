import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import s from "./CategoryFilter.module.css";

type TaskFilterProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: TaskFilterProps) {
  const tasks = useSelector((state: RootState) => state.tasks.items);

  // Отримуємо унікальні категорії
  const categories = ["All", ...new Set(tasks.map((task) => task.category))];

  return (
    <div className={s.filterWrapper}>
      <h3 className={s.title}>Filter your tasks by category:</h3>
      <div className={s.filterButtons}>
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? s.active : s.btn}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

import s from "./StatusFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setStatusFilter } from "../../redux/filtersSlice";

export default function StatusFilter() {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filters.status);

  return (
    <div className={s.btnWrapper}>
      <h3>Filter your tasks:</h3>

      <button
        className={filter === "all" ? s.active : s.btn}
        onClick={() => dispatch(setStatusFilter("all"))}
      >
        All
      </button>

      <button
        className={filter === "active" ? s.active : s.btn}
        onClick={() => dispatch(setStatusFilter("active"))}
      >
        Active
      </button>

      <button
        className={filter === "completed" ? s.active : s.btn}
        onClick={() => dispatch(setStatusFilter("completed"))}
      >
        Completed
      </button>
    </div>
  );
}

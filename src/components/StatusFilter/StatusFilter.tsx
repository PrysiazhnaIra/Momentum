import { useState } from "react";
import s from "./StatusFilter.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function StatusFilter() {
  // const [activeFilter, setActiveFilter] = useState("All");

  // const handleToggle = (filter: string) => {
  //   setActiveFilter(filter);
  // };

  const filter = useSelector((state: RootState) => state.filters.status);

  return (
    <div className={s.btnWrapper}>
      <h3>Filter your tasks:</h3>

      <button>All {filter === "all" && "is active"}</button>
      <button>Active {filter === "active" && "is active"}</button>
      <button>Completed {filter === "completed" && "is active"}</button>

      {/* <button
        className={`${s.btn} ${activeFilter === "All" ? s.activeBtn : ""} `}
        onClick={() => handleToggle("All")}
      >
        All
      </button>
      <button
        className={`${s.btn} ${activeFilter === "In progress" ? s.activeBtn : ""} `}
        onClick={() => handleToggle("In progress")}
      >
        In progress
      </button>
      <button
        className={`${s.btn} ${activeFilter === "Done" ? s.activeBtn : ""} `}
        onClick={() => handleToggle("Done")}
      >
        Done
      </button> */}
    </div>
  );
}

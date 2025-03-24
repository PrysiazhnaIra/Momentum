import { useState } from "react";
import s from "./StatusFilter.module.css";

export default function StatusFilter() {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleToggle = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className={s.btnWrapper}>
      <h3>Filter your tasks:</h3>
      <button
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
      </button>
    </div>
  );
}

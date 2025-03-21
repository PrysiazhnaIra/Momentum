import css from "./Background.module.css";
import { useEffect } from "react";
import bgColors from "../../data/background.json";

const Background = ({ currentColor, onChangeColor }) => {
  useEffect(() => {
    document.body.style.backgroundColor = currentColor;
  }, [currentColor]);

  return (
    <section
      style={{ backgroundColor: currentColor }}
      className={css.bgWrapper}
    >
      <div className={css.pallette}>
        <ul className={css.list}>
          {bgColors.map((color) => (
            <li
              onClick={() => onChangeColor(color.color)}
              className={css.color}
              key={color.id}
              style={{ backgroundColor: color.color }}
            ></li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Background;

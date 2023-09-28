import React from "react";
import cn from "classnames";
import styles from "./Sort.module.css";

const Sort = () => {
  // Работаем со списком категорий
  const [activeCategory, setActiveCategory] = React.useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетфрианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  // Работаем с открывающимся списком сортировки
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const listPopup = ["популярности", "по цене", "по алфавиту"];
  const onClickListItem = (i) => {
    setSelected(i);
    setOpen(!open);
  }

  return (
    <div className={styles.sort}>
      <ul className={styles["sort-names"]}>
        {categories.map((el, i) => (
          <li
            onClick={() => setActiveCategory(i)}
            key={i}
            className={cn(styles.li, {
              [styles["li-active"]]: activeCategory === i,
            })}
          >
            {el}
          </li>
        ))}
      </ul>
      <div className={styles.popup}>
        <p className={styles["popup-text"]}>
          Сортировка по:{" "}
          <span
            onClick={() => setOpen(!open)}
            className={styles["select-text"]}
          >
            {listPopup[selected]}
          </span>
        </p>
        {open && (
          <ul className={styles["sort-block"]}>
            {listPopup.map((el, i) => (
              <li
                onClick={() => onClickListItem(i)}
                key={i}
                className={cn(styles["sort-block-text"], {
                  [styles["sort-active"]]: selected === i,
                })}
              >
                {el}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sort;

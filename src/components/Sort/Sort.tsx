import React from "react";
import cn from "classnames";
import styles from "./Sort.module.css";

type sortProps = {
  categoryId: number;
  onClickCategory: (value: number) => void;
  sortType: { name: string; sort: string };
  onClickSort: (obj: { name: string; sort: string }) => void;
};


const Sort: React.FC<sortProps> = ({
  categoryId,
  onClickCategory,
  sortType,
  onClickSort,
}) => {

  // Работаем со списком категорий
  const categories: string[] = [
    "Все",
    "Мясные",
    "Вегетфрианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  // Работаем с открывающимся списком сортировки
  const [open, setOpen] = React.useState(false);
  // const [selected, setSelected] = React.useState(0);
  const listPopup = [
    { name: "популярности", sort: "-rating" },
    { name: "по цене", sort: "-price" },
    { name: "по алфавиту", sort: "title" },
  ];
  const onClickListItem = (obj: { name: string; sort: string }) => {
    onClickSort(obj);
    setOpen(!open);
  };

  return (
    <div className={styles.sort}>
      <ul className={styles["sort-names"]}>
        {categories.map((el, i) => (
          <li
            onClick={() => onClickCategory(i)}
            key={i}
            className={cn(styles.li, {
              [styles["li-active"]]: categoryId === i,
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
            {sortType.name}
          </span>
        </p>
        {open && (
          <ul className={styles["sort-block"]}>
            {listPopup.map((obj, i) => (
              <li
                onClick={() => onClickListItem(obj)}
                key={i}
                className={cn(styles["sort-block-text"], {
                  [styles["sort-active"]]: sortType.name === obj.name,
                })}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sort;

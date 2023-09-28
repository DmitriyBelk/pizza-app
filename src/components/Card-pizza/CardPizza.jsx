/* eslint-disable react/prop-types */
import React from "react";
import styles from "./CardPizza.module.css";
import cn from "classnames";

const CardPizza = ({ imageUrl, name, price, sizes, types }) => {
  const [activeType, setActiveType] = React.useState(0);
  const typeNames = ["тонкое", "традиционное"];
  const [activeSize, setActiveSize] = React.useState(0);

  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="" />
      <p className={styles["card-title"]}>{name}</p>
      <div className={styles.property}>
        <div className={styles.height}>
          {types.map((el, i) => (
            <div
              onClick={() => setActiveType(i)}
              key={i}
              className={cn(styles["property-text"], {
                [styles["property-active"]]: activeType === i,
              })}
            >
              {typeNames[el]}
            </div>
          ))}
        </div>
        <div className={styles.width}>
          {sizes.map((el, i) => (
            <div
              onClick={() => setActiveSize(i)}
              key={i}
              className={cn(styles["property-num"], {
                [styles["property-active"]]: activeSize === i,
              })}
            >
              {el} см.
            </div>
          ))}
        </div>
      </div>
      <div className={styles["footer"]}>
        <p className={styles["price"]}>от {price} ₽</p>
        <button className={styles["btn"]}>+ Добавить</button>
      </div>
    </div>
  );
};

export default CardPizza;

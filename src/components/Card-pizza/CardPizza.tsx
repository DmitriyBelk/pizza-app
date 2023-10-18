import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { CartItem, CartSliceState, addItem } from "../../redux/slices/cartSlice";
import styles from "./CardPizza.module.css";
import cn from "classnames";
import { RootState } from "../../redux/store";

type CardPizzaProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  types: number[];
  sizes: number[];
};

const CardPizza: React.FC<CardPizzaProps> = ({ id, imageUrl, name, price, sizes, types }) => {

  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState) =>
    state.cartSlice.items.find((obj) => obj.id === id)
  );
  const [activeType, setActiveType] = React.useState<number>(0);
  const typeNames = ["тонкое", "традиционное"];
  const [activeSize, setActiveSize] = React.useState<number>(0);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      name,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
      count: 0,
    };
    dispatch(addItem(item));
  };

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
        <button onClick={onClickAdd} className={styles["btn"]}>
          + Добавить{" "}
          {addedCount > 0 && (
            <i className={styles["added-count"]}>{addedCount}</i>
          )}
        </button>
      </div>
    </div>
  );
};

export default CardPizza;

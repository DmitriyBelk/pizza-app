import styles from "./CartCard.module.css";
import { useDispatch } from "react-redux";
import {
  addItem,
  minusCartItem,
  removeItem,
} from "../../redux/slices/cartSlice";


type CartCardProps = {
  id: number;
  name: string;
  price: number;
  count: number;
  imageUrl: string;
  type: string;
  size: number;
};

const CartCard: React.FC<CartCardProps> = ({ id, name, price, count, imageUrl, type, size }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };
  const onClickMinus = () => {
    count > 1 && dispatch(minusCartItem(id));
  };
  const onClickRemove = () => {
    if (window.confirm("Вы действительно хотите удалить товар?"))
      dispatch(removeItem(id));
  };
  return (
    <div className={styles["cart-card"]}>
      <div className={styles["cart-card-left"]}>
        <img className={styles.img} src={imageUrl} alt="" />
        <div className={styles.description}>
          <p className={styles["description-title"]}>{name}</p>
          <p className={styles["description-property"]}>
            {type}, {size} см.
          </p>
        </div>
      </div>
      <div className={styles["count"]}>
        <span onClick={onClickMinus} className={styles["count-symbol"]}>
          -
        </span>
        <span className={styles["count-num"]}>{count}</span>
        <span onClick={onClickPlus} className={styles["count-symbol"]}>
          +
        </span>
      </div>
      <p className={styles["price"]}>{price * count} ₽</p>
      <div onClick={onClickRemove} className={styles["btn-delete"]}>
        &#215;
      </div>
    </div>
  );
};

export default CartCard;

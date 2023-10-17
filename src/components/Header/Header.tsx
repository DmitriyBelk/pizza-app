import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Header.module.css";

const Header: React.FC = () => {

  const { items, totalPrice } = useSelector((state) => state.cartSlice);
  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);
  
  return (
    <div className={styles.header}>
      <Link to={"/"}>
        <div className={styles["header-left"]}>
          <img className="logo" src="/img/logo.svg" alt="" />
          <h1 className={styles["logo-text"]}>React PIZZA</h1>
        </div>
      </Link>
      <div className={styles["header-right"]}>
        <Link to={"/cart"}>
          <button className={styles.btn}>
            <span>{totalPrice} ₽</span>
            <span>|</span>
            <img src="/img/icon-cart.svg" alt="" />
            {totalCount}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

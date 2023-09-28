import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
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
            <span>530 ₽</span>
            <span>|</span>
            <img src="/img/icon-cart.svg" alt="" />3
          </button>
        </Link>
        
      </div>
    </div>
  );
};

export default Header;

import { Link } from "react-router-dom";
import CartCard from "./CartCard";
import styles from "./CartPage.module.css";

const CartPage = () => {
  return (
    // <div className={styles.cartPage}>
    //   <div className={styles["cart-header"]}>
    //     <div className={styles["cart-header-left"]}>
    //       <img className={styles["cart-header-left-img"]} src="/img/icon-cart-for-cart.svg" alt="" />
    //       <h3 className={styles["cart-header-left-text"]}>Корзина</h3>
    //     </div>
    //     <div className={styles["cart-header-right"]}>
    //       <img src="/img/icon-trash.svg" alt="" />
    //       <p className={styles["cart-header-right-text"]}>Очистить корзину</p>
    //     </div>
    //   </div>
    //   <div className={styles["cart-content"]}>
    //     <CartCard />
    //   </div>
    //   <div className={styles["cart-footer"]}>
    //     <div className={styles["cart-footer-total"]}>
    //       <p className={styles["cart-footer-total-text"]}>
    //         Всего пицц:{" "}
    //         <span className={styles["cart-footer-amount-span"]}>3 шт.</span>
    //       </p>
    //       <p className={styles["cart-footer-total-text"]}>
    //         Сумма заказа:{" "}
    //         <span className={styles["cart-footer-sum-span"]}>900 ₽</span>
    //       </p>
    //     </div>
    //     <div className={styles["cart-footer-btn"]}>
    //       <button className={styles["btn-out"]}>Вернуться назад</button>
    //       <Link to={"/"}>
    //         <button className={styles["btn-pay"]}>Оплатить сейчас</button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>


    <div className={styles["cart-empty"]}>
      <h3 className={styles["cart-empty-title"]}>Корзина пустая 😕</h3>
      <p className={styles["cart-empty-text"]}>Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
      <img className={styles["cart-empty-img"]} src="/img/img-cart-empty.png" alt="" />
      <Link to={"/"}>
        <button className={styles["cart-empty-btn"]}>Вернуться назад</button>
      </Link>
    </div>
  );
};

export default CartPage;

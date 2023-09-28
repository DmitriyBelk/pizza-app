import React from 'react'

import styles from "./CartCard.module.css"

const CartCard = () => {
  return (
    <div className={styles["cart-card"]}>
      <div className={styles["cart-card-left"]}>
        <img className={styles.img} src="https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg" alt="" />
        <div className={styles.description}>
          <p className={styles["description-title"]}>Сырный цыпленок</p>
          <p className={styles["description-property"]}>тонкое тесто, 26 см.</p>
        </div>
      </div>
      <div className={styles["count"]}>
        <span className={styles["count-symbol"]}>-</span>
        <span className={styles["count-num"]}>2</span>
        <span className={styles["count-symbol"]}>+</span>
      </div>
      <p className={styles["price"]}>770 ₽</p>
      <div className={styles["btn-delete"]}>&#215;</div>
    </div>
  )
}

export default CartCard
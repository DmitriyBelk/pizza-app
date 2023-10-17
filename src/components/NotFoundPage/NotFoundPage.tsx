import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.text}>Ничего не найдено :(</h1>
      <Link to={"/"}>
        <button className={styles.btn}>Вернуться на главную страницу</button>
      </Link>
    </div>
  )
}

export default NotFoundPage
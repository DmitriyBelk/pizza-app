import styles from "./Search.module.css";

const Search = () => {
  return (
    <input className={styles.input} type="text" placeholder="Поиск пиццы..." />
  )
}

export default Search
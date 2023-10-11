import React from "react";

import { AppContext } from "../../App";

import styles from "./Search.module.css";

const Search = () => {
  const { searchValue, setSearchValue, onChangeSearchInput } =
    React.useContext(AppContext);
  return (
    <div className={styles.main}>
      <img className={styles.img} src="/img/icon-search.svg" alt="" />
      <input
        value={searchValue}
        onChange={(e) => onChangeSearchInput(e)}
        className={styles.input}
        type="text"
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <div
          className={styles["btn-delete"]}
          onClick={() => setSearchValue("")}
        >
          &#215;
        </div>
      )}
    </div>
  );
};

export default Search;

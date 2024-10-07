import React from "react";
import styles from "./SearchForm.module.css";

const SearchForm = () => {
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input type="text" name="search" className={styles.input} />
      <button type="button" className={styles.searchBtn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;

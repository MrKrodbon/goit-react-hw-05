import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Menu from "../Menu/Menu";

import styles from "../Header/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        Movie<span className={styles.logo}>GO</span>
      </h1>
      <Menu />
      <SearchForm />
    </header>
  );
};

export default Header;

import React from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li>Home</li>
      <li>Browse Movies</li>
    </ul>
  );
};

export default Menu;

import React from "react";
import MovieList from "../MovieList/MovieList";

import styles from "./MainContent.module.css";

const MainContent = () => {
  return (
    <>
      <h2 className={styles.main}>Main movie review</h2>
      <p className={styles.mainTitle}>
        Millions of movies, shows and people. Explore now.
      </p>
      <div>
        <MovieList />
      </div>
    </>
  );
};

export default MainContent;

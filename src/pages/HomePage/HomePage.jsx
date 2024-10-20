import React, { useEffect } from "react";

import styles from "./HomePage.module.css";

import Navigation from "../../components/Navigation/Navigation";
import TopMoviesList from "../../components/TopMoviesList/TopMoviesList";

const HomePage = ({ moviesList }) => {
  return (
    <>
      <Navigation />

      <h2 className={styles.main}>Main movie review</h2>
      <p className={styles.mainTitle}>
        Millions of movies, shows and people. Explore now.
      </p>

      <TopMoviesList moviesList={moviesList} />
    </>
  );
};

export default HomePage;

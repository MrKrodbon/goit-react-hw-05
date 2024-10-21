import React, { useEffect } from "react";

import css from "./HomePage.module.css";

import Navigation from "../../components/Navigation/Navigation";
import TopMoviesList from "../../components/TopMoviesList/TopMoviesList";

const HomePage = ({ moviesList }) => {
  return (
    <div className={css.homePageWrapper}>
      <h2 className={css.main}>Main movie review</h2>
      <p className={css.mainTitle}>
        Millions of movies, shows and people. Explore now.
      </p>

      <TopMoviesList moviesList={moviesList} />
    </div>
  );
};

export default HomePage;
import css from "./HomePage.module.css";

import TopMoviesList from "../../components/TopMoviesList/TopMoviesList";

const HomePage = ({ moviesList }) => {
  return (
    <div className={css.homePageWrapper}>
      <p className={css.mainTitle}>
        Millions of movies, shows and people. Explore now!
      </p>

      <TopMoviesList moviesList={moviesList} />
    </div>
  );
};

export default HomePage;

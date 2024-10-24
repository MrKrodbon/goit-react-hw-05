import css from "./HomePage.module.css";

import MovieList from "../../components/MovieList/MovieList";

const HomePage = ({ moviesList }) => {
  return (
    <div className={css.homePageWrapper}>
      <p className={css.mainTitle}>
        Millions of movies, shows and people. Explore now!
      </p>

      <MovieList moviesList={moviesList} />
    </div>
  );
};

export default HomePage;

import css from "./HomePage.module.css";

import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";

import { getTrends } from "../../api/movies-api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const movieData = await getTrends();
        setMovies(movieData);
      } catch (error) {
        setMovies([]);
        throw new Error("Error of search top movies");
      }
    })();
  }, []);

  return (
    <div className={css.homePageWrapper}>
      <p className={css.mainTitle}>
        Millions of movies, shows and people. Explore now!
      </p>
      {movies.length !== 0 ? (
        <MovieList moviesList={movies} />
      ) : (
        <p className={css.emptyMovieField}>There is no top movies</p>
      )}
    </div>
  );
};

export default HomePage;

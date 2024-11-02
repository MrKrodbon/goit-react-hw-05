import css from "./HomePage.module.css";

import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";

import { getTrends } from "../../api/movies-api";

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const movieData = await getTrends();
        setMovies(movieData);
      } catch (error) {
        setMovies(null);
        throw new Error(`An error occured ${error}`);
      }
    })();
  }, []);

  return (
    <div className={css.homePageWrapper}>
      {Array.isArray(movies) ? (
        <>
          <p className={css.mainTitle}>
            Millions of movies, shows and people. Explore now!
          </p>
          <MovieList moviesList={movies} />
        </>
      ) : (
        <p className={css.emptyMovieField}>There is no top movies for today</p>
      )}
    </div>
  );
};

export default HomePage;

import { useState } from "react";

import css from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

import { POSTER_PATH, DEFAULT_IMG } from "../../constants/constants.js";

const MovieList = ({ moviesList }) => {
  const [hoveredMovieId, sethoveredMovieId] = useState(null);
  const location = useLocation();
  let timeoutId;

  const onMouseEnterHandle = (id) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      sethoveredMovieId(id);
    }, 500);
  };

  const onMouseLeaveHandle = () => {
    sethoveredMovieId(0);
    clearTimeout(timeoutId);
  };

  return (
    <div>
      <ul className={css.ul}>
        {moviesList.map((movie) => (
          <li key={movie.id} className={css.li}>
            <Link to={`/movies/${movie.id}`} key={movie.id} state={location}>
              <div
                className={css.imageContainer}
                onMouseEnter={() => onMouseEnterHandle(movie.id)}
                onMouseLeave={onMouseLeaveHandle}
              >
                {hoveredMovieId === movie.id ? (
                  <div className={css.description}>
                    <p>Release: {movie.release_date}</p>
                    <p>Average vote: {movie.vote_average}</p>
                  </div>
                ) : (
                  <img
                    src={
                      movie.poster_path
                        ? [`${POSTER_PATH}${movie.poster_path}`]
                        : DEFAULT_IMG
                    }
                    alt="poster"
                    className={css.img}
                  />
                )}
              </div>
            </Link>
            <div className={css.description}>
              <p className={css.title}>{movie.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

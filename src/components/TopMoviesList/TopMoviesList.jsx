import { useState } from "react";

import css from "./TopMoviesList.module.css";
import { Link } from "react-router-dom";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const TopMoviesList = ({ moviesList }) => {
  console.log(moviesList);

  const [hoveredMovieId, sethoveredMovieId] = useState(null);
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
  console.log(hoveredMovieId);

  return (
    <div>
      <ul className={css.moviesList}>
        {moviesList.map((movie) => (
          <li key={movie.id} className={css.movie}>
            <Link to={`/movies/${movie.id}`} key={movie.id}>
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
                        ? [
                            `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                          ]
                        : defaultImg
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

export default TopMoviesList;

import { DEFAULT_IMG, POSTER_PATH } from "../../constants/constants.js";

import css from "./Movie.module.css";

const Movie = ({
  movie: { title, vote_average, poster_path, release_date, id },
}) => {
  return (
    <>
      <img
        src={poster_path ? [`${POSTER_PATH}${poster_path}`] : DEFAULT_IMG}
        alt="poster"
        className={css.img}
      />
      <div className={css.contentWrapper}>
        <p className={css.title}>{title}</p>
        <p>Rating: {Math.round(vote_average)}/10</p>
        <p className={css.release}>{release_date}</p>
      </div>
    </>
  );
};

export default Movie;

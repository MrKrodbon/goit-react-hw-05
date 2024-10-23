import { POSTER_PATH } from "../../constants/constants.js";

import css from "./Movie.module.css";

const Movie = ({
  movie: { title, vote_average, poster_path, release_date, id },
}) => {
  return (
    <>
      <img src={`${POSTER_PATH}${poster_path}`} className={css.img} />

      <div className={css.contentWrapper}>
        <p className={css.title}>{title}</p>
        <p>Rating: {Math.round(vote_average)}/10</p>
        <p className={css.release}>{release_date}</p>
      </div>
    </>
  );
};

export default Movie;

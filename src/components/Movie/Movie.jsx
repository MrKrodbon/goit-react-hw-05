import React from "react";

import { POSTER_PATH } from "../../constants/constants,js";

import css from "./Movie.module.css";

const MoviesList = ({
  movie: { title, vote_average, poster_path, release_date },
}) => {
  return (
    <>
      <img src={`${POSTER_PATH}${poster_path}`} className={css.img} />
      <div className={css.contentWrapper}>
        <p>{title}</p>
        <p>Rating: {vote_average}</p>
        <p>Release Date: {release_date}</p>
      </div>
    </>
  );
};

export default MoviesList;

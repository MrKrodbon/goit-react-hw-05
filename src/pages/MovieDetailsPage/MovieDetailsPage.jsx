import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import css from "./MovieDetailsPage.module.css";

import { getMovieById } from "../../api/movies-api.js";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  useEffect(() => {
    (async () => {
      const response = await getMovieById(movieId);
      setMovie(response);
    })();
  }, []);

  console.log({ movie });

  return (
    <div className={css.detailsContainer}>
      <img
        src={
          movie.poster_path
            ? [`https://image.tmdb.org/t/p/w500${movie.poster_path}`]
            : defaultImg
        }
        alt="poster"
        className={css.img}
      />
      <div className={css.descriptionWrapper}>
        <h2>{movie.original_title}</h2>
        <p>Rating: {movie.vote_average}</p>
        <p>Overview: {movie.overview}</p>
        <p>Popularity: {movie.popularity}</p>
        <p>Release Date: {movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieDetailsPage;

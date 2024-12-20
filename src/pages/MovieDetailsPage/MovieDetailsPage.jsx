import { useEffect, useRef, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { POSTER_PATH, DEFAULT_IMG } from "../../constants/constants.js";

import css from "./MovieDetailsPage.module.css";

import { getMovieById } from "../../api/movies-api.js";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const locationRef = useRef(location.state);

  useEffect(() => {
    (async () => {
      const response = await getMovieById(movieId);
      setMovie(response);
    })();
  }, [movieId]);

  const goBackHandle = () => {
    const backHref = locationRef.current ?? "/";

    navigate(backHref);
  };

  return (
    <div className={css.detailsPageWrapper}>
      <button onClick={goBackHandle} className={css.backBtn}>
        Go back
      </button>
      <div className={css.detailsContainer}>
        <img
          src={
            movie.poster_path
              ? [`${POSTER_PATH}${movie.poster_path}`]
              : DEFAULT_IMG
          }
          alt="poster"
          className={css.img}
        />
        <div className={css.descriptionWrapper}>
          <h2>{movie.original_title}</h2>
          <p>Rating: {Math.round(movie.vote_average)}</p>
          <p>Overview: {movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
        </div>
      </div>

      <div className={css.additionInfoWrapper}>
        <h2 className={css.additionInfoTitle}>Addition information</h2>
        <ul className={css.ul}>
          <li className={css.li}>
            <Link state={locationRef.current} to="cast" className={css.link}>
              cast
            </Link>
          </li>
          <li className={css.li}>
            <Link state={locationRef.current} to="reviews" className={css.link}>
              reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;

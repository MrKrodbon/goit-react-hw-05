import Movie from "../Movie/Movie";
import styles from "./MovieList.module.css";

const MovieList = ({ movieData }) => {
  // console.log(movieData);

  return (
    <ul className={styles.moviesList}>
      {movieData.map((movie) => {
        <li>
          <Movie movieData={movie} />;
        </li>;
      })}
    </ul>
  );
};

export default MovieList;

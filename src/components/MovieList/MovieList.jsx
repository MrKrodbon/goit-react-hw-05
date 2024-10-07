import Movie from "../Movie/Movie";
import styles from "./MovieList.module.css";

const MovieList = () => {
  return (
    <ul className={styles.moviesList}>
      <Movie />
    </ul>
  );
};

export default MovieList;

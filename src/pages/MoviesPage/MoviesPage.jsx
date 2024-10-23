import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";

import css from "./MoviesPage.module.css";
import Movie from "../../components/Movie/Movie";
import { Link, useLocation } from "react-router-dom";

const MoviesPage = () => {
  const [movieList, setMovieList] = useState([]);

  const location = useLocation();

  return (
    <>
      <div className={css.searchField}>
        <SearchForm movieList={setMovieList} />
      </div>
      <div className={css.moviesListWrapper}>
        <ul className={css.ul}>
          {movieList.length === 0 ? (
            <li>
              <p className={css.motivationContent}>
                Cool movies are waiting for you!
              </p>
            </li>
          ) : (
            movieList.map((movie) => (
              <Link to={`/movies/${movie.id}`} state={location} key={movie.id}>
                <li className={css.li}>
                  <Movie movie={movie} />
                </li>
              </Link>
            ))
          )}
        </ul>
      </div>
    </>
  );
};

export default MoviesPage;

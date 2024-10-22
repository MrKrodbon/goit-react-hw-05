import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";

import css from "./MoviesPage.module.css";
import Movie from "../../components/Movie/Movie";

const MoviesPage = () => {
  const [movieList, setMovieList] = useState([]);
  console.log(movieList);

  return (
    <>
      <div className={css.movieWrapper}>
        <div className={css.searchField}>
          <SearchForm movieList={setMovieList} />
        </div>
      </div>
      <div className={css.moviesListWrapper}>
        <ul className={css.ul}>
          {movieList.length === 0 ? (
            <li>
              <p>There is no movies of you query</p>
            </li>
          ) : (
            movieList.map((movie) => (
              <li key={movie.id} className={css.li}>
                <Movie movie={movie} />
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};

export default MoviesPage;

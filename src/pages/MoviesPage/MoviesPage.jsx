import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";

import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";

import { searchMovie } from "../../api/movies-api";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParams = searchParams.get("query");

  useEffect(() => {
    (async () => {
      if (queryParams) {
        const response = await searchMovie(queryParams);
        setMovieList(response);
      }
    })();
  }, [queryParams]);

  return (
    <div className={css.searchWrapper}>
      <div className={css.searchField}>
        <SearchForm setSearchParams={setSearchParams} />
      </div>
      <ul className={css.ul}>
        {movieList.length === 0 ? (
          <li>
            <p className={css.motivationContent}>
              Cool movies are waiting for you!
            </p>
          </li>
        ) : (
          <MovieList moviesList={movieList} />
        )}
      </ul>
    </div>
  );
};

export default MoviesPage;

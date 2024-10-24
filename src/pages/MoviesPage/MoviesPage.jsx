import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";

import css from "./MoviesPage.module.css";
import Movie from "../../components/Movie/Movie";
import { Link, useSearchParams } from "react-router-dom";

import { searchMovie } from "../../api/movies-api";

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
    <>
      <div className={css.searchField}>
        <SearchForm setSearchParams={setSearchParams} />
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
              <Link
                to={`/movies/${movie.id}`}
                state={`/movies?${searchParams}`}
                key={movie.id}
              >
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

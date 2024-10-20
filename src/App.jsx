import css from "./App.module.css";

import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetalsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MoviesReviews from "./components/MovieReviews/MovieReviews";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { searchMovie, getTrends } from "./api/movies-api";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const movieData = await getTrends();
      setMovies(movieData);
    })();
  }, []);

  return (
    <div>
      <nav className={css.nav}>
        <Navigation />
      </nav>

      <Routes>
        <Route path="/" element={<HomePage moviesList={movies} />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route
          path="/movies/:movieId"
          element={<MovieDetalsPage movieDetails={movies} />}
        >
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MoviesReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

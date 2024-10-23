import css from "./App.module.css";

import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";

import { getTrends } from "./api/movies-api";

const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetalsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MoviesReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MovieCredits = lazy(() =>
  import("./components/MovieCredits/MovieCredits")
);

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
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage moviesList={movies} />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route
            path="/movies/:movieId"
            element={<MovieDetalsPage movieDetails={movies} />}
          >
            <Route path="cast" element={<MovieCredits />} />
            <Route path="reviews" element={<MoviesReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

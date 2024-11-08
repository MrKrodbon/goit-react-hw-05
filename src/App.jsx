import css from "./App.module.css";

import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader } from "./components/Loader/Loader";

const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));

function App() {
  return (
    <div>
      <nav className={css.nav}>
        <Navigation />
      </nav>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

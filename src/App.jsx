import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import { fetchMoviesWithTopic } from "./searchMovie-api";
import MovieList from "./components/MovieList/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const movieData = await fetchMoviesWithTopic("cars", 1);
      
      setMovies(movieData => );
    }
    fetchMovies();

    
    console.log(movies);
  }, []);
  console.log(movies);

  return (
    <>
      <Header />
      <MainContent />
      <MovieList movieData={movies} />
      <Footer />
    </>
  );
}

export default App;

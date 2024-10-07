import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import { fetchMoviesWithTopic } from "./searchMovie-api";

function App() {
  useEffect(() => {
    async function fetchMovies() {
      const data = await fetchMoviesWithTopic("cars");
      console.log(data);
    }

    fetchMovies();
  }, []);

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;

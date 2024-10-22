import React, { useState } from "react";
import css from "./SearchForm.module.css";

import { searchMovie } from "../../api/movies-api";

const SearchForm = ({ movieList }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target.elements;

    const response = await searchMovie(form.search.value);
    movieList(response);
  };

  return (
    <form onSubmit={handleSubmit} className={css.searchForm}>
      <input type="text" name="search" className={css.input} />
      <button type="submit" className={css.searchBtn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;

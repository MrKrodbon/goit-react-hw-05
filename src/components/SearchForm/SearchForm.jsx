import React, { useState } from "react";
import css from "./SearchForm.module.css";

import { searchMovie } from "../../api/movies-api";

const SearchForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    form.reset();
    return form.elements.search.value;
  };

  return (
    <form onSubmit={handleSubmit} className={css.searchForm}>
      <input
        type="text"
        name="search"
        className={css.input}
        placeholder="Input the movie name"
      />
      <button type="submit" className={css.searchBtn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;

import React from "react";

const SearchForm = () => {
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search"></input>
      <button type="button">Search</button>
    </form>
  );
};

export default SearchForm;

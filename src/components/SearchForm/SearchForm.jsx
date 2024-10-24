import css from "./SearchForm.module.css";

const SearchForm = ({ setSearchParams }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    setSearchParams({ query: form.elements.search.value });
    form.reset();
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

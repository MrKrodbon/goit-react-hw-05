import axios from "axios";

const API_KEY = "7b73efdd80b0cee6d1d0a7bfe9feff2c";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const fetchMoviesWithTopic = async (movie) => {
  try {
    const response = await axios.get(
      `/search/movie?query=${movie}&api_key=${API_KEY}`
    );
    return response.data.results;
  } catch {
    throw new Error();
  }
};

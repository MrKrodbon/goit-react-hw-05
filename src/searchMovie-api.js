import axios from "axios";

const API_KEY = "7b73efdd80b0cee6d1d0a7bfe9feff2c";

axios.defaults.baseURL = "https://api.themoviedb.org/3/search/movie";

export const fetchMoviesWithTopic = async (query, userPage) => {
  const axiosOptions = {
    params: {
      query: query,
      api_key: API_KEY,
      page: userPage,
    },
  };

  try {
    const response = await axios.get("", axiosOptions);
    return response.data.results;
  } catch (error) {
    return error;
  }
};

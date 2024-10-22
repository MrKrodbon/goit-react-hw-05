import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjczZWZkZDgwYjBjZWU2ZDFkMGE3YmZlOWZlZmYyYyIsIm5iZiI6MTcyOTQzNzcyNi4xMTk3ODcsInN1YiI6IjY3MDQxN2RhYTVmMjlmNDNhNTczZjhlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uo1JUOxZUEIu--0OPUEGjiqKXk9N-1tEHbCeQJRmm7Y";

const searchMovieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  params: {
    language: "en-US",
    page: 1,
  },
});

export const searchMovie = async (query) => {
  try {
    const response = await searchMovieInstance.get("", {
      params: {
        query,
      },
    });

    return response.data.results;
  } catch (error) {
    return error;
  }
};

const getTopMovieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/trending/movie/day",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  params: {
    include_adult: false,
    language: "en-US",
  },
});

export const getTrends = async () => {
  try {
    const response = await getTopMovieInstance.get("");

    return response.data.results;
  } catch (error) {
    return error;
  }
};

const getMovieByIdInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  params: {
    language: "en-US",
  },
});

export const getMovieById = async (movieId) => {
  try {
    const response = await getMovieByIdInstance.get(`/${movieId}`);

    return response.data;
  } catch (error) {
    return error;
  }
};

const getMovieCreditsInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  params: {
    language: "en-US",
  },
});

export const getMovieCredits = async (movieId) => {
  try {
    const response = await getMovieCreditsInstance.get(`/${movieId}/credits`);

    return response.data;
  } catch (error) {
    return error;
  }
};

const getMovieReviewsInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  params: {
    language: "en-US",
    page: 1,
  },
});

export const getMovieReviews = async (movieId) => {
  try {
    const response = await getMovieReviewsInstance.get(`/${movieId}/reviews`);

    return response.data;
  } catch (error) {
    return error;
  }
};

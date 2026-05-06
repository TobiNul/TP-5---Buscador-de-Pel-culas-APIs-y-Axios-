import axios from "axios";

const API_KEY = "5c8d322d";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = (query) => {
  return axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: query,
    },
  });
};

export const getMovieDetail = (id) => {
  return axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      i: id,
    },
  });
};
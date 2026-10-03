import axios from "axios";
import type { MoviesResponse } from "../types/movies";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

const token = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (
  query: string,
  page: number,
): Promise<MoviesResponse> => {
  const response = await axios.get<MoviesResponse>(BASE_URL, {
    params: {
      query,
      page,
      include_adult: false,
      language: "en-US",
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

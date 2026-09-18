import axios from "axios";
import type { Movie } from "../types/movie";

interface FetchMoviesResponse {
  results: Movie[];
  total_pages: number;
}

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const fetchMovies = async (
  query: string,
  page: number,
): Promise<FetchMoviesResponse> => {
  const response = await axios.get<FetchMoviesResponse>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query,
        page,
      },
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    },
  );

  return response.data;
};

export default fetchMovies;
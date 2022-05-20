import axios from "axios";
import { Movie } from "../contexts/@types";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const api_key = "api_key=7d509ed152315c558106f8c3a87e574c";
const language = "language=pt-BR";

export const getAllGenres = async () => {
  const response = await api.get(`/genre/movie/list?${api_key}&${language}`);
  return response.data.genres;
};

export const getPopularMovies = async () => {
  const response = await api.get(`/movie/popular?${api_key}&${language}`);
  return response.data.results;
};

export const getEspecificGenreMovies = async (genresId: number[]) => {
  const response = await api.get(`/movie/popular?${api_key}&${language}`);
  const movies = response.data.results.map((movie: Movie) => {
    return {
      priority: movie.genre_ids.every((id: number) => genresId.includes(id)),
      suggestions: movie.genre_ids.find((id: number) => genresId.includes(id))
    }
  });
  console.log(movies);
  return movies;
};
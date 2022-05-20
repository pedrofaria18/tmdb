import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { getEspecificGenreMovies, getPopularMovies } from "../services";
import { formatDate } from "../utils/formatData";
import { Genre, Movie } from "./@types";
import { useGenres } from "./useGenres";

interface MoviesContextProps {
  movies: Movie[];
  movieSelected: Movie;
  handleMovieSelected: (movie: Movie) => void;
}

export const MoviesContext = createContext({} as MoviesContextProps);

export const MoviesProvider = ({ children }: { children: ReactElement }) => {
  const { genres } = useGenres();

  const [movies, setMovies] = useState<Movie[]>([]);
  const [movieSelected, setMovieSelected] = useState({} as Movie);

  const formatMovieAndSave = (movies: Movie[]) => {
    const moviesFormated = movies.map((movie: Movie) => ({
      ...movie,
      release_date: formatDate(movie.release_date),
    }));
    setMovies(moviesFormated);
  };

  const handleMovieSelected = (movie: Movie) => {
    setMovieSelected(movie);
  };

  useEffect(() => {
    async function loadMovies() {
      const genresSelected = genres.filter((genre) => genre.selected);

      const genresId = genresSelected.map((genre: Genre) => genre.id);

      if (genresSelected.length === 0) {
        const response = await getPopularMovies();
        formatMovieAndSave(response);
      } else {
        const response = await getEspecificGenreMovies(genresId);
        formatMovieAndSave(response);
      }
    }

    loadMovies();
  }, [genres]);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        movieSelected,
        handleMovieSelected,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => useContext(MoviesContext);

import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { getAllGenres } from "../services";
import { Genre } from "./@types";

interface GenresContextProps {
  genres: Genre[];
  handleUpdateGenre: (id: number) => void;
}

export const GenresContext = createContext({} as GenresContextProps);

export const GenresProvider = ({ children }: { children: ReactElement }) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    async function loadGenres() {
      const response = await getAllGenres();
      const genres: Genre[] = response.map((genre: any) => ({
        ...genre,
        selected: false,
      }));
      setGenres(genres);
    }

    loadGenres();
  }, []);

  const handleUpdateGenre = (id: number) => {
    const newGenres = genres.map((genre) => ({
      ...genre,
      selected: genre.id === id ? !genre.selected : genre.selected,
    }));
    setGenres(newGenres);
  };

  return (
    <GenresContext.Provider
      value={{
        genres,
        handleUpdateGenre,
      }}
    >
      {children}
    </GenresContext.Provider>
  );
};

export const useGenres = () => useContext(GenresContext);

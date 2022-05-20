import { useMovies } from "../../contexts/useMovies";
import { MovieItem } from "./MovieItem";
import { Container } from "./styles";

export const MovieList = () => {
  const { movies } = useMovies();

  if (movies.length === 0) {
    return (
      <Container>
        <h1>Nenhum filme foi encontrado</h1>
      </Container>
    );
  }

  return (
    <Container>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Container>
  );
};

import { Movie } from "../../../contexts/@types";
import { useMovies } from "../../../contexts/useMovies";
import { Container } from "./styles";

interface MovieItemProps {
  movie: Movie;
}

const IMG_API = "https://image.tmdb.org/t/p/w1280";

export const MovieItem = ({ movie }: MovieItemProps) => {
  const { poster_path, release_date, title } = movie;

  const { handleMovieSelected } = useMovies();

  return (
    <Container onClick={() => handleMovieSelected(movie)}>
      <img src={IMG_API + poster_path} alt={`Poster do filme ${title}`} />
      <h1>{title}</h1>
      <h2>{release_date}</h2>
    </Container>
  );
};

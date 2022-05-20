import { Genre, useGenres } from "../../contexts/useGenres";
import { GenreItem } from "./GenreItem";
import { Container, Content } from "./styles";

export const GenreList = () => {
  const { genres } = useGenres();

  if (genres.length === 0) {
    return <Container></Container>;
  }

  return (
    <Container>
      <p>FILTRE POR:</p>
      <Content>
        {genres.map((genre: Genre) => (
          <GenreItem key={genre.id} genre={genre} />
        ))}
      </Content>
    </Container>
  );
};

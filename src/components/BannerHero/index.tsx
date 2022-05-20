import { GenreList } from "../GenreList";
import { Container } from "./styles";

export const BannerHero = () => {

  return (
    <Container>
      <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>

      <GenreList />
    </Container>
  );
};

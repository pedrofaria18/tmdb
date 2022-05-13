import { ReactElement } from "react";
import { Container } from "./styles";

export const BannerHero: React.FC = (): ReactElement => {
  return (
    <Container>
      <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
    </Container>
  )
}
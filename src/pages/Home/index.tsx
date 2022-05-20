import { BannerHero } from "../../components/BannerHero";
import { Header } from "../../components/Header";
import { MovieList } from "../../components/MovieList";

import { Container } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Header />
      <BannerHero />
      <MovieList />
    </Container>
  );
};

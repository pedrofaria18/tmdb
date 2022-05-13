import { BannerHero } from "../../components/BannerHero"
import { Header } from "../../components/Header"

import { Container } from "./styles"

export const Home = () => {
  return (
    <Container>
      <Header />
      <BannerHero />
    </Container>
  )
}
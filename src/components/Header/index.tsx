import { ReactElement } from "react";

import LogoSVG from '../../assets/logo.svg'

import { Container } from "./styles";

export const Header: React.FC = (): ReactElement => {
  return (
    <Container>
      <img src={LogoSVG} alt="Logo" />
    </Container>
  )
}
import styled, { css } from "styled-components";

export const Container = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
  width: 100vw;
  height: 100vh;
`;

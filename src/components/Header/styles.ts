import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary[50]};
  `}

  width: 100vw;
  height: 56px;

  padding: 0 112px;

  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

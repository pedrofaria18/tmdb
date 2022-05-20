import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary[100]};

    h1 {
      width: 800px;
      color: ${theme.colors.white};
      text-align: center;
      font-size: 48px;
    }
  `}

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 85px 0;

  @media (max-width: 768px) {
    padding: 40px 16px;
    justify-content: start;

    h1 {
      width: 280px;
      text-align: start;
      font-size: 24px;
    }
  }
`;

import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;

  ${({ theme }) => css`
    p {
      color: ${theme.colors.white};
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 16px;
    }
  `}

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const Content = styled.div`
  width: 768px;

  display: flex;
  flex-wrap: wrap;

  justify-content: center;

  gap: 12px;

  @media (max-width: 768px) {
    width: 100%;

    justify-content: start;
  }
`;

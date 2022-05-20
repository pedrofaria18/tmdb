import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 176px;

  ${({ theme }) => css`
    h1 {
      font-size: 16px;
      font-weight: 700;
      color: ${theme.colors.black};
    }

    h2 {
      font-size: 14px;
      font-weight: 700;
      color: ${theme.colors.gray[100]};
    }
  `}

  img {
    width: 176px;
    height: 264px;
    border-radius: 4px;
  }

  cursor: pointer;
`;

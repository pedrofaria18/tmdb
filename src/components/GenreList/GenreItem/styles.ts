import styled, { css } from "styled-components";

interface ContainerProps {
  selected: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 16px;

  border-radius: 4px;

  ${({ theme, selected }) => css`
    background-color: ${!selected ? theme.colors.white : theme.colors.orange};

    cursor: ${selected ? "normal" : "pointer"};

    gap: ${selected ? "10px" : "0"};

    span {
      color: ${!selected ? theme.colors.gray[200] : theme.colors.white};
      font-size: 16px;
      font-weight: 700;
    }

    img {
      cursor: ${selected ? "pointer" : "normal"};
    }
  `}
`;

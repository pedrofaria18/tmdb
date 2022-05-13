import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body, button, textarea, input {
    font: 400 1rem "Roboto", sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: 0;

    &:hover {
      cursor: pointer;
    }
  }
`;

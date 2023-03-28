import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  .body {
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.mineShaft};
    font-size: ${({ theme }) => theme.size.medium}px;
  }
`;

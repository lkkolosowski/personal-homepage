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
    color: ${({ theme }) => theme.color.mineShaft};
    background-color: ${({ theme }) => theme.color.whiteLilac};
    font-size: ${({ theme }) => theme.size.medium}px;
    user-select: none;

    @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
      font-size: ${({ theme }) => theme.size.small}px;
    }
  }
`;

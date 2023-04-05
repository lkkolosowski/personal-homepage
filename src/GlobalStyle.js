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
    color: ${({ theme }) => theme.textPrimary};
    font-size: 18px;
    letter-spacing: 0.05em;
    user-select: none;
    background-color: ${({ theme }) => theme.background};
    transition: background-color ${({ theme }) => theme.themeAnimation};

    @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
      font-size: 14px;
    }
  }
`;

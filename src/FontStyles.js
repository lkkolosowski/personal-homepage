import { createGlobalStyle } from "styled-components";
import Regular from "./fonts/Inter/Inter-Regular.ttf";
import SemiBold from "./fonts/Inter/Inter-SemiBold.ttf";
import Bold from "./fonts/Inter/Inter-Bold.ttf";
import Black from "./fonts/Inter/Inter-Black.ttf";

export const FontStyles = createGlobalStyle`

  @font-face {
    font-family: "Regular";
    src: url(${Regular}) format("truetype");
    font-display: swap;
    
  }

  @font-face {
    font-family: "SemiBold";
    src: url(${SemiBold}) format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: "Bold";
    src: url(${Bold}) format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: "Black";
    src: url(${Black}) format("truetype");
    font-display: swap;
  }
`;
